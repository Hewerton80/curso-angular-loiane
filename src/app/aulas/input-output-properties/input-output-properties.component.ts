import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertysComponent implements OnInit {

  nomeCurso: string = 'Angular';
  valorInicial: number = 15;
  constructor() { }

  ngOnInit(): void {
  }

  onMudouValor(evento: any){
    console.log(evento);
  }

  hmtlContetent: string = `
  <section>
  <article>
      <h3>Input/Output Properties</h3>
      <!-- passando valores de pai para filho -->
      <app-input-property
          [nome] = 'nomeCurso'
      >
      </app-input-property>
      <!-- passando valores de filho para pai -->
      <app-output-property
          [valor]="valorInicial"
          (mudouValor)="onMudouValor($event)"
      >
      </app-output-property>
  </article>
</section>
`;
tsContent: string = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertysComponent implements OnInit {

  nomeCurso: string = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
`;
InputHmtlContetent: string = `
<p>Nome do curso: {{nomeCurso}}</p>
`
InputTsContent: string = `
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') 
  nomeCurso: string = '';
  //valor passado na property binding

  constructor() { }

  ngOnInit(): void {
  }

}
`
OutputHmtlContetent: string = `
<div>
    <button 
        class="btn btn-primary"
        (click)="decrementa()"
    >
    -
    </button>
    <input 
        type="text" 
        readonly
        [value]="valor"
    />
    <button 
        class="btn btn-primary"
        (click)="incrementa()"
    >
    +
    </button>
</div>
`
OutputTsContent: string = `
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

`

}
