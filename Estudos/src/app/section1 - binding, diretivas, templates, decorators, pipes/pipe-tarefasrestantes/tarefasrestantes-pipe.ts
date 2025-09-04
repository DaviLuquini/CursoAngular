import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarefasrestantes',
  standalone: true,
  pure: false
})
export class TarefasrestantesPipe implements PipeTransform {
  transform(tarefas: string[]): number {
    let tarefasRestantes = 0;
    // for (let i = 0; i < tarefas.length; i++) {
    //   if (tarefas[i] != '') {
    //     tarefasRestantes++;
    //   }
    // }
    for (const element of tarefas) {
      if (element != '') {
        tarefasRestantes++;
      }
    }

    return tarefasRestantes;
  }
}
