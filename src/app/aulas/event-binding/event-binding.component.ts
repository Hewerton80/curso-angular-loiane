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

  hmtlContetent: string = `
  <article>
  <h3>Event Biding</h3>
  <div>
      <button (click)="botaoClicado()" class="btn btn-primary">
          Me clique!
      </button>
      <br/><br/>
      <input 
          type="text" 
          (keyup)="onKeyUp($event)"
          (keyup.enter)="salvarValor($event.target.value)"
          (blur)="salvarValor($event.target.value)"
      />
      <!-- blur - evento que é ativado quando o elemento perde o foco-->
      <p>Valor atual: {{valorAtual}}</p>
      <p>Valor Salvo: {{valorSalvo}}</p>

      <span 
          (mouseover)="OnmouseOver()"
          (mouseout)="OnmouseOut()"
          [class.highlight]="isMouseOver"
      >
      <!-- Irá adicionar a classe "highlight" se a variável isMouseOver for true-->
          Passe o mouse sobre mim
      </span>
  </div>
</article>
`;
tsContent: string = `
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
`;

}
