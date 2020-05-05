import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {


  //name : string = "abc";
  pessoa: any = {
    name: 'def',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }
  hmtlContetent: string = `
  <section>
  <article>
      <h3>Two way data binding</h3>
      <div>
          <!-- o valor do input sera igual de name -->
          <label for="name">name: </label>
          <input id='name' type="text"
              [(ngModel)]="pessoa.name"
          />
          <br/>
          <label id='idade' for="idade">idade:</label>
          <input type="text"
              [(ngModel)]="pessoa.idade"
          />
          <br/>
          <p>Meu nome é <b>{{pessoa.name}}</b> e tenho <b>{{pessoa.idade}}</b> anos</p>
      </div>
  </article>
</section>
`;
tsContent: string = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  pessoa: any = {
    name: 'def',
    idade: 20
  }
  constructor() { }

  ngOnInit(): void {
  }

}
`;

}
