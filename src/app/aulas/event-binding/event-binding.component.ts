import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string =  '';
  valorSalvo: string =  '';
  isMouseOver: boolean = false;
  botaoClicado(){
    alert('Botão clicado');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }
  salvarValor(value: string){
    this.valorSalvo = value;
  }

  OnmouseOver(){
    this.isMouseOver= !this.isMouseOver;
  }
  OnmouseOut(){
    this.isMouseOver= !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
