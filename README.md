# Farol · PWA para GitHub Pages

Consulta de luces de navegación y práctica desde ocho direcciones, sin pistas de orientación. Instalable en Android y utilizable sin conexión tras la primera carga completa. El código y los estilos están dentro de index.html.

## Publicar sin compilar

1. Crea un repositorio en GitHub, por ejemplo `farol`. Puedes usar un repositorio público con GitHub Free.
2. Extrae el ZIP y sube **su contenido**, no el ZIP ni una carpeta contenedora, a la raíz del repositorio. `index.html` debe quedar junto a `sw.js`, `manifest.webmanifest` y los iconos.
3. Confirma los archivos en la rama `main`.
4. En el repositorio, ve a **Settings → Pages**.
5. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
6. Elige **main** y **/(root)**; pulsa **Save**.
7. Espera a que GitHub muestre el enlace publicado. Normalmente será `https://TU-USUARIO.github.io/farol/`.

Las rutas son relativas: también funciona si eliges otro nombre de repositorio. No necesitas Node.js, npm, servidor propio, claves ni compilación. Incluye `.nojekyll` si tu método de subida permite archivos con punto inicial; esta aplicación no depende de Jekyll.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Instalar en Android

1. Abre el enlace HTTPS publicado en Chrome de Android.
2. Espera a que aparezca **Disponible sin conexión** al pie.
3. Menú **⋮ → Añadir a pantalla de inicio → Instalar** (el texto puede variar).
4. Abre Farol desde el icono. Consulta y práctica quedan disponibles sin red.

No abras el HTML desde el gestor de archivos para instalar la PWA. Necesita la URL HTTPS de GitHub Pages. No es un APK.

## Actualizaciones

Modifica los archivos del repositorio y cambia `VERSION` en `sw.js` en cada publicación. Abre la app con conexión y vuelve a abrirla tras la actualización. Las nuevas cachés se preparan antes de eliminar las antiguas de esta misma aplicación. Las cachés de otros proyectos del mismo dominio no se eliminan.

El progreso se guarda localmente; no se sincroniza entre dispositivos y se elimina al borrar los datos del sitio. Los enlaces a fuentes normativas requieren conexión. No hay analítica ni servicios externos necesarios para ejecutar la app.

## Archivos

- `index.html`: interfaz, estilos, catálogo y ejercicios.
- `manifest.webmanifest`: identidad y configuración instalable.
- `sw.js`: funcionamiento sin conexión y versiones de caché.
- `icon-192.png`, `icon-512.png`, `icon.svg`: iconos.
- `.nojekyll`: publicación estática.

Contenido didáctico simplificado: no sustituye al RIPA, la vigilancia ni la valoración del riesgo de abordaje.

## Contenido del PER incorporado

Esta versión tiene 116 fichas de luces nocturnas, 20 de marcas diurnas y 27 de reglas y excepciones. Incluye la cobertura del apartado UT 6.3 (reglas 20, 21 y 23–31), con variantes por eslora, arrancada, fondeo y operación, y enlaces a las reglas en el BOE.

No existe un número oficial cerrado de dibujos del examen. Las posiciones son esquemáticas; las blancas intermedias de ciertos remolques se calculan según sus dimensiones y se explican en las fichas. La regla 31 se estudia como concepto porque no prescribe un patrón exclusivo de colores. La app no es un banco oficial de exámenes ni cubre otras materias del PER. No incorpora la regla 22 ni las señales adicionales de los anexos I, II y III, excluidos del temario.

En práctica puedes elegir luces, marcas o reglas. Se conservan las vistas sin orientación indicada y una respuesta compatible entre cuatro. Las otras interpretaciones se explican después de responder. Algunas fichas son equivalentes al observarlas desde ciertos ángulos.

Fuentes:
- Temario PER: https://www.boe.es/buscar/act.php?id=BOE-A-2014-10344#aii
- RIPA: https://www.boe.es/buscar/act.php?id=BOE-A-1977-15605#partec

Validación: 972 casos de práctica; cuatro opciones distintas y una compatible, sectores de luces, marcas y puntuación. La revisión de cobertura no sustituye al estudio del texto oficial.
