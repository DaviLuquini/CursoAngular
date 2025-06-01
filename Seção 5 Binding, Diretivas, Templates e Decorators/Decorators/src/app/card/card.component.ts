import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true }) planType: string = '';
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked ' + valueEmitted);
  }
}
