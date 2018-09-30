import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../buscar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private srvBuscar: BuscarService) { }

  resultsBusqueda:Object=[];
  txtBuscar:string="";

  ngOnInit() {
  }

  buscar():void{
    this.srvBuscar.buscar(this.txtBuscar).subscribe(res=>{
      console.log(res);
      this.resultsBusqueda=res.results;
    })
  }
}
