import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventBindingComponent } from './aulas/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './aulas/two-way-data-binding/two-way-data-binding.component';
import { ClassEStyleBindingComponent } from './aulas/class-e-style-binding/class-e-style-binding.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
