import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent {
  buttonWidth = "100px";
  buttonBackgroundColor = "aqua";
  styleObj = {  width: "120px", backgroundColor: "green" }

  updateStyleButtonWrong() {
    console.log("updateStyleButtonWrong");
    this.styleObj.width = "130px";
    this.styleObj.backgroundColor = "red";
  }

  updateStyleButtonCorrect() {
    console.log("updateStyleButtonCorrect");
    this.styleObj = {  width: "140px", backgroundColor: "yellow" }
  }
}
