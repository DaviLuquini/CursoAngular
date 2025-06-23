import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true}) buttonText: string = '';
  @Input({required: true}) buttonStyle: 'white' | 'purple' = 'white';

  @Input() isDisabled: boolean = false;

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtoClicked() {
    this.buttonClickedEmitt.emit();
  }
}
