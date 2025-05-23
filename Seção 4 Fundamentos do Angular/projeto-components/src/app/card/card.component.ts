import { Component } from '@angular/core';

interface IPlano {
  infos: IInfos
}

interface IInfos {
  tipo: String;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  plano: IPlano = {
    infos: {
      tipo: "Simples", 
      preco: 100
    }
  }
}
