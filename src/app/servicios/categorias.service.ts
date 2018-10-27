import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

export interface Categoria {
  id: number;
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  categorias(): Observable<any> {
    return this.http.get(environment.URI_CATEGORIAS);
  }
}
