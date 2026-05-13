import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarioDexPage } from './features/mario/mario-dex-page/mario-dex-page';
import { NuevoPersonaje } from './features/mario/nuevo-personaje/nuevo-personaje';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarioDexPage, FormsModule],
  standalone: true,
  template: `<app-mario-dex-page></app-mario-dex-page>`,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('MarioDex2');
}
