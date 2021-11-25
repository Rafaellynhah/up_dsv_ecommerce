import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MetodoPagamento } from "../models/metodoPagamento";

@Injectable({
    providedIn: "root",
})
export class MetodoPagamentoService {
    private baseUrl = "https://localhost:5001/api/metodo-pagamento";

    constructor(private http: HttpClient) {}

    list(): Observable<MetodoPagamento[]> {
        return this.http.get<MetodoPagamento[]>(`${this.baseUrl}/list`);
    }
}
