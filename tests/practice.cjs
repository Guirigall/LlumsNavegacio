const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const script=html.split('<script>')[1].split('</script>')[0];
new vm.Script(script);
const setup=script.slice(0,script.indexOf("document.querySelectorAll('[data-page]').forEach(b=>b.onclick"));
const context={assert,console,document:{querySelector(){return {textContent:''}}},localStorage:{getItem(){return null}}};
vm.createContext(context);
vm.runInContext(setup+`
question=()=>{};
let count=0;
for(const kind of ['lights','marks','theory']){
 start('Todas',10000,kind);
 const expected=practiceCandidates('Todas',kind).flatMap(d=>kind==='lights'?[0,180].filter(b=>visibleLights(d,b).length).map(b=>d.id+':'+b):[d.id]);
 assert.equal(session.questions.length,expected.length);
 assert.deepEqual(new Set(session.questions.map(d=>kind==='lights'?d.id+':'+d.bearing:d.id)),new Set(expected));
 for(const d of session.questions){
  if(kind==='lights')assert.ok(d.bearing===0||d.bearing===180);
  const q=makeQuestionOptions(d,d.bearing);
  assert.equal(q.options.length,4);
  assert.equal(new Set(q.options.map(x=>x.id)).size,4);
  assert.equal(q.options.filter(x=>q.matches.some(m=>m.id===x.id)).length,1);
  assert.ok(q.options.some(x=>x.id===q.expected));
  count++;
 }
}
for(const cat of categories){
 if(!practiceCandidates(cat,'lights').length)continue;
 start(cat,40,'lights');
 assert.ok(session.questions.every(d=>d.cat===cat&&(d.bearing===0||d.bearing===180)));
}
assert.ok(scene(data.find(d=>d.id==='motor'),'estribor').includes('COSTADO DE ESTRIBOR'));
console.log('Correcte: '+count+' casos; llums només de proa/popa, categories, opcions compatibles i consulta lateral conservada.');
`,context);
