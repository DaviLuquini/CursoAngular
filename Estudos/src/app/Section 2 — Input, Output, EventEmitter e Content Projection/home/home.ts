import { Component } from '@angular/core';
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Button, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  color!: string;

  trocarCor(click: boolean) {
    if (click) this.color = 'green';
  }
}
