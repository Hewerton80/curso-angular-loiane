import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();
  //classe responsável por emitir eventos ao componente pai

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit( {novoValor: this.valor});
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
