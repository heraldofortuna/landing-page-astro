# Embrace Company

Landing page de la empresa Embrace.

## 🚀 Comenzando

### 📋 Pre-requisitos

- Acceso y permisos a este repositorio.
- Visual Studio Code (de preferencia).
- Npm.
- Git.

### 🔧 Instalación

Instalar todas las dependencias que tenemos en el package.json:

```
npm install
```

## 📦 Despliegue

Corremos el proyecto en nuestro ambiente local:

```
npm run dev
```

Finalmente, ingresamos al siguiente enlace para poder ver en vivo nuestro proyecto en desarrollo.

## 🧪 Testing

El proyecto incluye pruebas unitarias y de integración configuradas con Vitest.

Para ejecutar todas las pruebas:

```
npm run test
```

## 🎖️ Rendimiento

El proyecto se puso a prueba en Lighthouse y estos fueron los resultados obtenidos:

![Project Score](./src/assets/lighthouse.mp4)

## 🛠️ Construido con

- [Astro](https://astro.build/) - El framework de frontend web principal que usamos.
- [Vue](https://vite.dev/) - Framework frontend para construir interfaces dinámicas.
- [Tailwind](https://tailwindcss.com/) - El framework de css que usamos.
- [Vitest](https://vitest.dev/) - El framework de pruebas para la aplicación.

## 🦾 Decisiones técnicas

- Decidimos usar Astro y Vue pues el proyecto es una landing page única con mucho contenido estático, pero al tener partes dinámicos por el formulario y la multisegmentación, instalamos vue3 como un plugin para construir estas secciones especiales.

- Usamos Tailwindcss para la construcción rápida de los estilos según el figma establecido.

- Usamos vitest, @vue/test-utils y jsdom para crear tests unitarios de componentes vue.

- Decidimos recrear 2 tipos de segmentación de clientes: 'Emprendedor' y 'Empresa'.

## ✒️ Autores

- Heraldo Fortuna

## 📄 Licencia

MIT License

Copyright (c) [2025] [Heraldo Fortuna]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## 🎁 Expresiones de Gratitud

A Génesis, que me apoya en esta etapa de búsqueda de trabajo.
