import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listatarefas } from "./section1 - binding, diretivas, templates, decorators, pipes/listatarefas/listatarefas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Listatarefas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('estudos');
}
