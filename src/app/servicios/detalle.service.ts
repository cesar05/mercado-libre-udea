import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DetalleService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  detalleProducto(idProducto: string): Observable<any> {
    return this.http.get(
      environment.URI_DETALLE_PRODUCTO + idProducto,
      this.httpOptions
    );
  }
}
