import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent {
  buttonDisabled = true;
  buttonDisabledText = 'Enabled';
  buttonTitle = 'Click me!';
  title = 'Attribute Binding Example';

  onButtonClick() {
    this.buttonDisabled = !this.buttonDisabled;
    this.buttonDisabledText = this.buttonDisabled ? 'Enabled' : 'Disabled';
  }
}
