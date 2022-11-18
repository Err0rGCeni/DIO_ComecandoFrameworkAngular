import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class Button {
  @Input() label:string = '';
  buttonText:string = 'Acessar';
  buttonTexts:string[] = ['Comprar', 'Vender', 'Trocar'];
  buttonNumber:number = 1;
  buttonObject = {
    label: 'Add'
  }

  getAlert(num: number){
    alert(`${this.label} - ${num}`)
  }
}
