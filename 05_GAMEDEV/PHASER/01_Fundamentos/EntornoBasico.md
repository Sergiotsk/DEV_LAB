# Guía de Creación del Entorno Básico con Phaser y Vite

Este documento detalla los pasos manuales que realizamos para configurar este entorno de desarrollo de juegos.

## 1. Estructura del Proyecto
Creamos una estructura de carpetas estándar para aplicaciones web modernas:
- `01_Fundamentos/` (Raíz del proyecto)
  - `src/` (Código fuente JavaScript)
  - `index.html` (Punto de entrada)
  - `package.json` (Configuración de dependencias)

## 2. Archivos de Configuración

### `package.json`
Este archivo convierte nuestra carpeta en un proyecto de Node.js.
- Definimos `"type": "module"` para poder usar `import` modernos de JavaScript (ES Modules).
- Agregamos dos dependencias clave:
  - **`vite`**: Un servidor de desarrollo ultra rápido que recarga la página cuando guardas cambios.
  - **`phaser`**: El motor de videojuegos.
- Definimos scripts:
  - `dev`: Inicia el servidor local.
  - `build`: Prepara el juego para subirlo a internet.

### `index.html`
Es el lienzo (canvas) donde se dibujará el juego.
- Incluimos un `<div id="app"></div>` donde Phaser inyectará el juego.
- Vinculamos el script principal con `<script type="module" src="/src/main.js"></script>`.

### `style.css`
Reseteamos los márgenes del navegador y centramos el juego en la pantalla con Flexbox para que se vea bien en cualquier monitor.

## 3. Código del Juego (`src/main.js`)
Aquí es donde ocurre la magia. Configuramos una instancia básica de `Phaser.Game`:
- **Configuración (`config`)**: Definimos el ancho, alto, tipo de renderizado (AUTO) y las físicas (gravedad).
- **Scene (Escena)**: Phaser usa "Escenas". Aquí definimos dos fases principales:
  1.  **preload()**: Cargamos las imágenes en memoria antes de empezar. Usamos assets de ejemplo de `labs.phaser.io`.
  2.  **create()**: Se ejecuta una vez que los assets están listos. Aquí colocamos el cielo, el logo y las partículas en pantalla.

## 4. Cómo ejecutar el proyecto
Como creamos los archivos manualmente, necesitas instalar las librerías que definimos en `package.json`.

1.  Abre la terminal en esta carpeta (`01_Fundamentos`).
2.  Descarga las librerías:
    ```bash
    npm install
    ```
3.  Enciende el motor:
    ```bash
    npm run dev
    ```
4.  Abre el link que aparece (ej: `http://localhost:5173`).

---
*Este entorno es "agnóstico", lo que significa que no depende de herramientas globales mágicas, solo de Node.js y los archivos locales.*
