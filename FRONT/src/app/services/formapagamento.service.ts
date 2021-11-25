import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormaPagamento } from "../models/FormaPagamento";

@Injectable({
    providedIn: "root",
})
export class FormaPagamentoService {
    private baseUrl = "https://localhost:5001/api/formapagamento";

    constructor(private http: HttpClient) {}

    list(): Observable<FormaPagamento[]> {
        return this.http.get<FormaPagamento[]>(`${this.baseUrl}/list`);
    }
}
