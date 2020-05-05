import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassEStyleBindingComponent } from './aulas/class-e-style-binding/class-e-style-binding.component';
import { EventBindingComponent } from './aulas/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './aulas/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

import { AceEditorModule } from 'ng2-ace-editor';
import "brace/mode/html";
import "brace/mode/typescript";
import { InputOutputPropertysComponent } from './aulas/input-output-properties/input-output-properties.component';
import { InputPropertyComponent } from './aulas/components/input-property/input-property.component';
import { OutputPropertyComponent } from './aulas/components/output-property/output-property.component';
import { DiretivasNgIfComponent } from './aulas/diretivas-ng-if/diretivas-ng-if.component';
import { DiretivasNgForComponent } from './aulas/diretivas-ng-for/diretivas-ng-for.component';
import { PipesComponent } from './aulas/pipes/pipes.component';
@NgModule({
  declarations: [
    AppComponent,
    ClassEStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputOutputPropertysComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    DiretivasNgIfComponent,
    DiretivasNgForComponent,
    PipesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
