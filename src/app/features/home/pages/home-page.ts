import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink], // Importante para usar routerLink en el template
  template: `
    <section>
      <h1>PPW Angular 21</h1>
      <p>Proyecto incremental listo para crecer.</p>
      
      <!-- Paso 6: Enlace a la nueva feature -->
      <nav>
        <a routerLink="/profile">Ir al Perfil de Usuario</a>
      </nav>
    </section>
  `,
})
export class HomePage {}