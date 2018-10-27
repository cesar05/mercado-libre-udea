import { Component, OnInit } from "@angular/core";
import { BuscarService } from "../servicios/buscar.service";
import { DetalleService } from "../servicios/detalle.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.css"]
})
export class BuscarComponent implements OnInit {
  constructor(
    private srvBuscar: BuscarService,
    private srvDetalleProducto: DetalleService
  ) {}

  resultsBusqueda: Array<Object> = [];
  txtBuscar: string = "";
  clicBtnBuscar: boolean = false;
  detalleProducto: any = {};

  ngOnInit() {}
  prueba(): void {
    console.log(this.detalleProducto);
    console.log(Object.keys(this.detalleProducto).length);
  }

  isObjectEmpty = function(obj) {
    return Object.keys(obj).length <= 0;
  };

  buscar(): void {
    this.clicBtnBuscar = true;
    this.srvBuscar.buscar(this.txtBuscar).subscribe(res => {
      this.detalleProducto = {};
      this.resultsBusqueda = res.results;
    });
  }

  consultarDetalleProducto(idDetalleProducto: string): void {
    console.log(this.detalleProducto);
    this.srvDetalleProducto
      .detalleProducto(idDetalleProducto)
      .subscribe(detalle => {
        this.detalleProducto = detalle;
        console.log(detalle);
      });
  }
}
