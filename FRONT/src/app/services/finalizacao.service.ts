import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";

@Injectable({
    providedIn: "root",
})
export class FinalizacaoService {
    private baseUrl = "https://localhost:5001/api/metodo-pagamento/";

    constructor(private http: HttpClient) {}

    list() {
        return this.http.get(`${this.baseUrl}/list`);
    }
}
