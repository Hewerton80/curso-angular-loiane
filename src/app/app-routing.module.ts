import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventBindingComponent } from './aulas/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './aulas/two-way-data-binding/two-way-data-binding.component';
import { ClassEStyleBindingComponent } from './aulas/class-e-style-binding/class-e-style-binding.component';
import { InputOutputPropertysComponent } from './aulas/input-output-properties/input-output-properties.component';
import { DiretivasNgIfComponent } from './aulas/diretivas-ng-if/diretivas-ng-if.component';
import { DiretivasNgForComponent } from './aulas/diretivas-ng-for/diretivas-ng-for.component';
import { PipesComponent } from './aulas/pipes/pipes.component';


const routes: Routes = [
  {
    path: '',
    component: ClassEStyleBindingComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'tho-way-data-binding',
    component: TwoWayDataBindingComponent
  },
  {
    path: 'input-output-properties',
    component: InputOutputPropertysComponent
  },
  {
    path: 'diretivas-ngif',
    component: DiretivasNgIfComponent
  },
  {
    path: 'diretivas-ngfor',
    component: DiretivasNgForComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
