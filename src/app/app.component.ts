import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPatronesComponent } from './features/patrones/components/lista-patrones/lista-patrones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPatronesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gof-patterns-explorer';
}