import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-if',
  templateUrl: './diretivas-ng-if.component.html',
  styleUrls: ['./diretivas-ng-if.component.css']
})
export class DiretivasNgIfComponent implements OnInit {

  cursos: string[] = ["Angular"];
  mostrarCursos: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handlercurso(): void{
    this.mostrarCursos = !this.mostrarCursos;
  }
  hmtlContetent: string = `
  <section>
  <h3>Diretiva - *ngif</h3>
  <div *ngIf="cursos.length > 0">
      Lista de cursos:
  </div>
  <div *ngIf="cursos.length === 0">
      Não existem cursos para serem listados!
  </div>
  <div *ngIf="mostrarCursos">
      Lista de cursos:
  </div>
  <div *ngIf="!mostrarCursos">
      Não existem cursos para serem listados!
  </div>
  <br/>
  <button 
      (click)="handlercurso()"
      class="btn btn-primary"
  >
      Mostrar ou esconder cursos
  </button>
  <!-- como alternativa: hidden -->
  <!-- <div [hidden]="mostrarCursos">
      Lista de cursos:
  </div>
  <div [hidden]="!mostrarCursos">
      Não existem cursos para serem listados!
  </div> -->
  <p>
      obs: O *ngIf é recomendado para árvore de 
      elementos grande. Ao contrário do hidden.
  </p>
</section>
  `;
  tsContent: string = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-if',
  templateUrl: './diretivas-ng-if.component.html',
  styleUrls: ['./diretivas-ng-if.component.css']
})
export class DiretivasNgIfComponent implements OnInit {

  cursos: string[] = ["Angular"];
  mostrarCursos: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handlercurso(): void{
    this.mostrarCursos = !this.mostrarCursos;
  }

}
  `;

}
