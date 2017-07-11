import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { MytestComponent } from './mytest/mytest.component';
import { FormsModule }   from '@angular/forms';
import { InputPropComponent } from './input-prop/input-prop.component';
import { OutputPropComponent } from './output-prop/output-prop.component';

@NgModule({
  declarations: [
    AppComponent,
    MytestComponent,
    InputPropComponent,
    OutputPropComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
