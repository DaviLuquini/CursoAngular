import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ required: true, alias: 'planPrice' }) planPrice: number = 0;
  @Input({ required: true, transform: (value: string) => value.toUpperCase() }) planType: string = '';

  //Get & Set
  // private _planType: string = '';

  // @Input({ required: true }) set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string {
  //   return this._planType;
  // }

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked ' + valueEmitted);
  }
}
