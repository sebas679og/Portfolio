# 💼 Portafolio Personal – Sebastián Orjuela

Este repositorio contiene el código fuente de mi **portafolio web personal**, desarrollado para presentar mi perfil profesional, experiencia, proyectos y habilidades como desarrollador de software.

🌐 **Sitio en producción:**
👉 [https://sebasorjuela.dev](https://sebasorjuela.dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad475697-3bb5-4c99-a78b-c28d68ef281d/deploy-status)](https://app.netlify.com/projects/sebasorjuela/deploys)

---

## 🚀 Características

* ✅ Diseño completamente responsivo
* ✅ Compatible con dispositivos móviles, tablets y desktop
* ✅ Navegación fluida con JavaScript
* ✅ Sección de proyectos destacados
* ✅ Integración con redes profesionales
* ✅ Pruebas automatizadas con Playwright
* ✅ Despliegue continuo con Netlify

---

## 🛠️ Tecnologías Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Playwright** (testing end-to-end)
* **Netlify** (deploy)

---

## 📦 Instalación y ejecución local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/sebasorjuela/portfolio.git
cd portfolio
```

---

### 2️⃣ Ejecutar servidor local

Este proyecto no requiere instalación de dependencias tradicionales.
Para levantar un servidor local puedes usar:

```bash
npx serve . -s
```

Luego abre en tu navegador:

```pagina del servidor expuesto
http://localhost:3000
```

---

## 🧪 Pruebas Automatizadas (Playwright)

El proyecto incluye pruebas end-to-end utilizando **Playwright**.

## 🔧 Instalación de dependencias de Playwright

```bash
npx playwright install --with-deps
```

---

## 📝 Generar pruebas (modo interactivo)

Este comando abre la interfaz gráfica para grabar pruebas automáticamente:

```bash
npx playwright codegen http://localhost:3000
```

---

## ▶️ Ejecutar pruebas

```bash
npx playwright test
```

### Opciones útiles

* 🖥️ Modo UI (interfaz gráfica):

  ```bash
  npx playwright test --ui
  ```

* ⚙️ Ejecutar con número específico de hilos:

  ```bash
  npx playwright test --workers=1
  ```

> ⚠️ Se recomienda no superar el número de núcleos de tu procesador.

Para más opciones consulta la documentación oficial:
[https://playwright.dev/docs/running-tests](https://playwright.dev/docs/running-tests)

---

## 📁 Estructura del Proyecto

```Directorio del proyecto
portfolio/
│
├── .github/
│
├── assets/
│   ├── css/
│   ├── cv/
│   ├── i18n/
│   ├── images/
│   └── js/
│
├── tests/
│   └── portfolio.spec.ts
│
├── .gitignore
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
├── robots.txt
└── sitemap.xml
```

---

## 📌 Objetivo del Proyecto

Este portafolio tiene como objetivo:

* Mostrar mi crecimiento como desarrollador
* Centralizar mis proyectos
* Servir como carta de presentación profesional
* Aplicar buenas prácticas de frontend y testing

---

## 📄 Licencia

Este proyecto es de uso personal.
La plantilla original pertenece a su respectivo autor.
