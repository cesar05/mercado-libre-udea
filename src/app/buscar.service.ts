import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  urlBuscar:string='https://api.mercadolibre.com/sites/MCO/search?q=iphone/sites/MCO/search?q=iphone'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  buscar():Observable<any>{
    return this.http.get(this.urlBuscar,this.httpOptions);
  }
}
