# 🦀 Laboratorio de Aprendizaje Tauri

¡Bienvenido a Tauri! Este es tu espacio para dominar el desarrollo de aplicaciones nativas ultra-ligeras.

## 🛠️ Paso 0: Prerrequisitos (¡Haz esto primero!)

Tauri necesita **Rust** y las herramientas de compilación de Microsoft para funcionar.

### 1. Instalar Microsoft Visual Studio C++ Build Tools
*   Probablemente ya lo tengas si instalaste node-gyp o herramientas de Windows, pero si no:
*   Descarga desde [https://visualstudio.microsoft.com/visual-cpp-build-tools/](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
*   Al instalar, asegúrate de marcar la casilla **"Desktop development with C++"** (Desarrollo para el escritorio con C++).

### 2. Instalar Rust
*   Ve a [https://rustup.rs/](https://rustup.rs/)
*   Descarga `rustup-init.exe` (la versión para Windows).
*   Ejecútalo y sigue las instrucciones (generalmente presionar `1` y Enter para instalación default).
*   **IMPORTANTE:** Cuando termine, **reinicia tu terminal** (o mejor, reinicia VS Code/PC) para que reconozca el comando `cargo`.

---

## 🚀 Paso 1: Tu Primera App en Tauri

Una vez instalado Rust, abre una terminal EN ESTA CARPETA (`e:\SERJITO\dev\TAURI_LAB`) y ejecuta:

```bash
npm create tauri-app@latest
```

Te hará unas preguntas. Te recomiendo responder así para empezar fácil:
1.  **Project name:** `mi-primera-app`
2.  **Identifier:** `com.tauri.test`
3.  **Frontend flavor:** `React` (¡Ya lo dominas!)
4.  **Language:** `TypeScript` (Igual que CertiMaster)

---

## 🏃 Paso 2: Correr la App

Entra a la carpeta creada:
```bash
cd mi-primera-app
npm install
npm run tauri dev
```

La primera vez tardará unos minutos compilando las librerías de Rust. ¡Las siguientes veces será instantáneo!

---

## 📚 Recursos Clave

*   [Documentación Oficial (Tauri v2)](https://v2.tauri.app/)
*   [Curso Gratuito de Rust (Español)](https://www.youtube.com/results?search_query=rust+espa%C3%B1ol) - *Opcional pero recomendado para entender el backend.*
