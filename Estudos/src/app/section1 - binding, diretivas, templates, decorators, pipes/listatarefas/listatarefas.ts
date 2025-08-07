import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefasrestantesPipe } from "../pipe-tarefasrestantes/tarefasrestantes-pipe";

@Component({
  selector: 'app-listatarefas',
  imports: [FormsModule, TarefasrestantesPipe],
  templateUrl: './listatarefas.html',
  styleUrl: './listatarefas.scss'
})
export class Listatarefas {
    tarefas = ['', '', '', ''];

    removerTarefa(i: number) {
      this.tarefas[i] = '';
    }
}
