#  Proyecto Angular 21 – Base Incremental

##  Objetivo
Crear el proyecto **ppw-angular-21** con Angular 21, habilitando routing y estableciendo una estructura base escalable para futuras prácticas.

---

##  Características
-  Proyecto Angular 21 configurado correctamente
-  Routing habilitado desde el inicio
-  Estructura modular con enfoque en features
-  Componente inicial HomePage
-  Base preparada para crecimiento

---

##  Creación del Proyecto
```
ng new ppw-angular-21 --routing --style=scss --ssr=false
cd ppw-angular-21
pnpm install
pnpm start
```
---

##  Estructura del Proyecto
```
src/
  app/
    app.config.ts
    app.routes.ts
    app.ts
    features/
      home/
        pages/
          home-page.ts
```
---

##  Implementación

### 1. Crear componente HomePage
Archivo:
src/app/features/home/pages/home-page.ts

Código:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <section>
      <h1>PPW Angular 21</h1>
      <p>Proyecto incremental listo para crecer.</p>
    </section>
  `,
})
export class HomePage {}
```
---

### 2. Configurar rutas
Archivo:
src/app/app.routes.ts

Código:

```
import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];
```
---

##  Routing
- Ruta principal: `/`
- Carga el componente HomePage
- Preparado para múltiples rutas futuras

---

##  Validación
-  La app inicia sin errores
-  HomePage se renderiza correctamente
-  Routing funcional
-  Estructura organizada y escalable

---

##  Decisiones de Arquitectura
- Uso de carpeta `features/` para modularidad
- Separación de rutas en `app.routes.ts`
- Componentes desacoplados

---

##  Notas Técnicas
- Angular 21
- SCSS habilitado
- SSR deshabilitado
- Uso de pnpm

---

##  Autor
Proyecto base para práctica incremental en Angular