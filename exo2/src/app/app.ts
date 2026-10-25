import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from './header/header';
import { Accueil } from './accueil/accueil';
import { Footer } from './footer/footer';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Accueil,Liste,Gestion],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('exo2');
}
