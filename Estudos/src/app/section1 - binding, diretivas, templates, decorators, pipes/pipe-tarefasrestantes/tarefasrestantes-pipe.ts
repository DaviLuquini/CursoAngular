import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarefasrestantes',
  standalone: true,
  pure: false
})
export class TarefasrestantesPipe implements PipeTransform {
  transform(tarefas: string[]): number {
    let tarefasRestantes = 0;
    for (let i = 0; i < tarefas.length; i++) {
      if (tarefas[i] != '') {
        tarefasRestantes++;
      }
    }
    console.log("hello");
    return tarefasRestantes;
  }
}
