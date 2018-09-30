import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BuscarService } from './buscar.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BuscarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
