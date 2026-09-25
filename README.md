# Portafolio web — Christopher Aguiño

Portafolio personal de una sola pagina (single page) construido con HTML5 semantico, CSS propio y JavaScript sin librerias. Incluye una seccion de Design System donde se documentan los tokens y componentes reales del sitio.

**Sitio publicado:** https://chriss369.github.io/Portafolio_Desarrollo_Web/

**Repositorio:** https://github.com/Chriss369/Portafolio_Desarrollo_Web

## Contenido

- Inicio / presentacion
- Sobre mi (formacion e intereses)
- Habilidades por categoria (frontend, backend, bases de datos, herramientas)
- Proyectos destacados con filtro por tecnologia
- Design System (colores, tipografia, espaciado, componentes)
- Contacto con formulario validado

## Tecnologias

- HTML5 semantico (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`)
- CSS3: Custom Properties, Flexbox, CSS Grid, media queries
- JavaScript ES6+ (sin frameworks)
- Google Fonts: Fraunces e Inter Tight
- Git / GitHub Pages

## Funcionalidades JavaScript

1. Tema claro/oscuro con preferencia guardada en `localStorage`
2. Menu responsive (hamburguesa) accesible con `aria-expanded`
3. Filtro de proyectos por tecnologia (HTML, CSS, JavaScript, Python, SQL)
4. Modal con el detalle de cada proyecto (se cierra con Escape o clic fuera)
5. Validacion del formulario de contacto con mensajes por campo
6. Boton "volver arriba" y resaltado del enlace de la seccion visible

## Proyectos destacados

- **Cartas de Memoria** — juego de memoria en el navegador (HTML, CSS, JavaScript)
  Repo: https://github.com/Chriss369/Cartas_De_Memoria
- **Sistema de Gestion para Gimnasio** — base de datos relacional (SQL Server / T-SQL)
  Repo: https://github.com/Chriss369/Proyecto_bd_SQL_Gimnasio
- **Clasificacion de Banano con IA** — clasificador de madurez con deep learning (Python, TensorFlow, Flask)
  Repo: https://github.com/Chriss369/Proyecto_Clasificaci-n_Banana

## Estructura del proyecto

```
tarea1_Desarrollo/
├── index.html
├── styles.css
├── main.js
├── imagenes/
│   ├── fotoperfil.jpg
│   ├── Cartas_Memoria.png
│   ├── Gimnasio-SQL.png
│   └── Clasificacion_Banana2.png
├── .gitignore
└── README.md
```

## Como verlo en local

1. Clona el repositorio: `git clone https://github.com/Chriss369/Portafolio_Desarrollo_Web.git`
2. Abre `index.html` en el navegador, o usa la extension Live Server de VS Code.

## Publicacion en GitHub Pages

Settings -> Pages -> Source: Deploy from a branch -> rama `main`, carpeta `/ (root)` -> Save.

## Autor

Christopher Aguiño
christopherabrahamaguino@gmail.com
https://github.com/Chriss369
