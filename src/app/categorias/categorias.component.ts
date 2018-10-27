import { Component, OnInit } from "@angular/core";
import { CategoriasService, Categoria } from "../servicios/categorias.service";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"]
})
export class CategoriasComponent implements OnInit {
  constructor(private srvCategorias: CategoriasService) {}

  categorias: Array<Object> = [];

  ngOnInit() {
    this.srvCategorias.categorias().subscribe(res => {
      this.categorias = res.categories;
    });
  }
}
