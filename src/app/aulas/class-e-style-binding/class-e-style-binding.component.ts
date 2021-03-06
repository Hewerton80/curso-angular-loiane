import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-e-style-binding',
  templateUrl: './class-e-style-binding.component.html',
  //styleUrls: ['./class-e-style-binding.component.css']
})
export class ClassEStyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hmtlContetent: string = `
    <section>
      <article>
          <h3>Class e style binding</h3>
          Selecione uma class:
          <select #valorClasse (change)="0">
              <option value="alert-success">success</option>
              <option value="alert-info">info</option>
              <option value="alert-warning">warning</option>
              <option value="alert-danger">danger</option>
          </select>
          <!-- valorClasse é uma variavel de templat que armazena o evenet.target do select quando ele muda-->
          <br/><br/>
          
          <div 
              class="alert {{ valorClasse.value }}"
          >
              A classe selecionada é: {{ valorClasse.value }}
          </div>
          <br/>

          <div 
              class="alert"
              [class.alert-success] = "valorClasse.value === 'alert-success'"
              [style.width] = "valorClasse.value === 'alert-success'?'500px':'100%'"
          >
              success
          </div>
          <!--  caso valorClasse.value === 'alert-success' retorne true, a tag adicionar a class alert-success-->
          <div 
              class="alert"
              [class.alert-info] = "valorClasse.value === 'alert-info'"
              [style.width] = "valorClasse.value === 'alert-info'?'500px':'100%'"
          >
              info
          </div>
          <div 
              class="alert"
              [class.alert-warning] = "valorClasse.value === 'alert-warning'"
              [style.width] = "valorClasse.warning === 'alert-info'?'500px':'100%'"
          >
              warning
          </div>
          <div 
              class="alert"
              [class.alert-danger] = "valorClasse.value === 'alert-danger'"
              [style.width] = "valorClasse.danger === 'alert-info'?'500px':'100%'"
          >
              danger
          </div>
      </article>
  </section>
  `;
  tsContent: string = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-class-e-style-binding',
    templateUrl: './class-e-style-binding.component.html',
    //styleUrls: ['./class-e-style-binding.component.css']
  })
  export class ClassEStyleBindingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }
  `;

}
