import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassEStyleBindingComponent } from './aulas/class-e-style-binding/class-e-style-binding.component';
import { EventBindingComponent } from './aulas/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './aulas/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClassEStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
