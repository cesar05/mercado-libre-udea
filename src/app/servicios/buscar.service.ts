import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root"
})
export class BuscarService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  buscar(txtBuscar): Observable<any> {
    return this.http.get(
      environment.URI_PRODUCTOS + txtBuscar,
      this.httpOptions
    );
  }
}
