import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-for',
  templateUrl: './diretivas-ng-for.component.html',
})
export class DiretivasNgForComponent implements OnInit {

  valorCurso: string = '';
  cursos: string[] = ["Angular","Java"];
  constructor() { }


  ngOnInit(): void {
  }
  adicionarCurso(): void{
    this.cursos = [...this.cursos, this.valorCurso];
    this.valorCurso = "";
  }
  hmtlContetent: string = `
  <section>
  <h3>Diretiva - *ngif</h3>
  <label for="curso">Novo curso: </label>
  <input 
      type="text"
      id="curso"
      [(ngModel)]="valorCurso"
  />
  <button 
      class="btn btn-primary"
      (click)="adicionarCurso()"
  >
      Adicionar curso
  </button>
  <p>lista de cursos:</p>

  <ul>
      <li *ngFor="let curso of cursos,let i = index">
          {{i+1}} - {{curso}}
      </li>
  </ul>
</section>
  `;
  tsContent: string = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-diretivas-ng-for',
    templateUrl: './diretivas-ng-for.component.html',
  })
  export class DiretivasNgForComponent implements OnInit {
  
    valorCurso: string = '';
    cursos: string[] = ["Angular","Java"];

    constructor() { }
  
    ngOnInit(): void {
    }
    
    adicionarCurso(): void{
      this.cursos = [...this.cursos, this.valorCurso];
      this.valorCurso = "";
    }

  }
  `;
}
