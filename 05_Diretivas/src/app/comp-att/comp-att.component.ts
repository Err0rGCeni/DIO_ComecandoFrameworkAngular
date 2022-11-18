import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-att',
  templateUrl: './comp-att.component.html',
  styleUrls: ['./comp-att.component.css']
})
export class CompAttComponent implements OnInit {
  estilo:string = "enable"
  corFundo:string = "gray"
  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  trocar(){
    if (this.estilo == 'enable'){
      this.estilo = 'disable'
    } else {
      this.estilo = 'enable'
    }
  }

  addLista(){
    this.lista.push(this.item)
  }
}
