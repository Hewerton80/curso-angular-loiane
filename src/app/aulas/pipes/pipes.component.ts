import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: "Learning JavaScript Data Structures and Algorithms",
    rating: 4.54231,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit(): void {
  }
  hmtlContetent: string = `
  <!-- para ver todos os pipes: https://angular.io/api?query=pipe -->
  <section>
      <h3>Pipes</h3>
      <p><b>Título</b>: {{livro.titulo | uppercase }}</p>
      <p><b>Estrelas</b>: {{livro.rating | number: '2.1-2'}}</p>
      <p><b>Página</b>: {{livro.numeroPaginas | number}}</p>
      <p><b>Preço</b>: {{livro.preco | currency:'BRL' }}</p>
      <p><b>Data Lançamento</b>: {{livro.dataLancamento | date:'dd/MM/yyyy'}}</p>
      <p><b>Url</b>: {{livro.url}}</p>
      <br/>
      <p><b>Livro</b>: {{livro | json}}</p>
  </section>
  `;
  tsContent: string = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.css']
  })
  export class PipesComponent implements OnInit {
  
  livro: any = {
    titulo: "Learning JavaScript Data Structures and Algorithms",
    rating: 4.54231,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
  `;

}
