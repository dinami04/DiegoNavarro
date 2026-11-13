# Portafolio · Diego Navarro

Sitio estático (HTML + CSS + JavaScript), sin dependencias que instalar.

## Estructura
```
index.html              Página principal
css/styles.css          Estilos (colores al inicio del archivo)
js/main.js              Menú, contacto y formulario de WhatsApp
assets/img/             Logo en SVG (nítido a cualquier tamaño)
assets/tech/            Íconos de tecnologías
assets/proyectos/       Aquí van las capturas de tus proyectos (ver LEEME.txt)
```

## Correr en Visual Studio Code
1. Descomprime el .zip.
2. En VS Code: Archivo > Abrir carpeta… y elige `diego-navarro-portafolio`.
3. Instala la extensión **Live Server** (Ritwick Dey). VS Code te la sugiere al abrir la carpeta.
4. Clic derecho en `index.html` > **Open with Live Server**.
5. Se abre en http://127.0.0.1:5500 y se recarga solo cada vez que guardas.

Alternativa sin extensión (necesita Node.js): en la terminal de VS Code ejecuta `npx serve .`

## Personalizar
- Contacto: edita el bloque `CONTACTO` al inicio de `js/main.js`.
- Capturas: guarda las imágenes en `assets/proyectos/` con los nombres de `LEEME.txt`.
- Avance de Borrego Drive: en `index.html` busca `--avance:70%` y `aria-valuenow="70"`, y cambia el número.
- Colores: variables en `:root` al inicio de `css/styles.css`.

## Publicar en Netlify
Arrastra la carpeta completa a https://app.netlify.com/drop
