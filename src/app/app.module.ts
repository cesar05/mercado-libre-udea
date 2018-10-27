import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BuscarComponent } from "./buscar/buscar.component";
import { BuscarService } from "./servicios/buscar.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { DetalleComponent } from "./detalle/detalle.component";
import { CategoriasComponent } from "./categorias/categorias.component";

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    DetalleComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [BuscarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
