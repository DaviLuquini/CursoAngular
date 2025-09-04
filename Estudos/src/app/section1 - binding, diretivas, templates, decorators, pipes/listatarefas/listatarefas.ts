import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefasrestantesPipe } from "../pipe-tarefasrestantes/tarefasrestantes-pipe";
import { TarefasService } from '../../Section 3 — Serviços, Injeção de Dependência e State/tarefas.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-listatarefas',
  imports: [FormsModule, TarefasrestantesPipe, AsyncPipe],
  templateUrl: './listatarefas.html',
  styleUrl: './listatarefas.scss'
})
export class Listatarefas {
  protected readonly tarefas = inject(TarefasService);

  removerTarefa(index: number) {
    this.tarefas.removerTarefa(index);
  }
}
