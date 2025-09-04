import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  //Observable
  private readonly tarefasSubject = new BehaviorSubject<string[]>(['', '', '', '']);
  tarefas$ = this.tarefasSubject.asObservable();

  removerTarefa(index: number) {
    const tarefas = [...this.tarefasSubject.value];
    tarefas[index] = '';
    this.tarefasSubject.next(tarefas);

    this.addTarefaRemovida(tarefas[index]);
  }

  //Signals
  tarefasRemovidas = signal<string[]>([]);

  addTarefaRemovida(tarefaRemovida: string) {
    this.tarefasRemovidas.update(current => [...current, tarefaRemovida]);
  }

}
