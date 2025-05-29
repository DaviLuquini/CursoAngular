import { Component } from '@angular/core';

@Component({
  selector: 'app-property-events-binding',
  templateUrl: './property-events-binding.component.html',
  styleUrls: ['./property-events-binding.component.scss']
})
export class PropertyEventsBindingComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text"
  isDisabled = false;
  title = "Property & Events Binding"

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputEvent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputText = inputElement.value;
    console.log('Input value changed:', this.inputText);
  }
}
