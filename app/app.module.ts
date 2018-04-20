import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importando Modulo HttpCLient para habilitar uso de API.
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //<<-- Incorporando HttpClienteModule al Modulo General del App
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
