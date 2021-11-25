import { Component, OnInit } from '@angular/core';
import { ItemVenda } from "src/app/models/item-venda";
import { ItemService } from "src/app/services/item.service";
import { FormaPagamentoService } from "src/app/services/formapagamento.service";
import { Router } from "@angular/router";
import { FormaPagamento } from "src/app/models/FormaPagamento";
import { Venda } from "src/app/models/venda";
import { VendaService } from "src/app/services/venda.service";
@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css']
})
export class FinalizacaoComponent implements OnInit {
  itens: ItemVenda[] = [];
  valorTotal!: number;
  formapagamento: FormaPagamento[] = [];
  nome!: string;
  formapagamentoId!: number;
  constructor(private itemService: ItemService, private router: Router, private formaPagamento: FormaPagamentoService, private vendaService: VendaService,) { }

  ngOnInit(): void {
    this.formaPagamento.list().subscribe((formapagamento) => {
      this.formapagamento = formapagamento;
      console.log(this.formapagamento);
    });

    let carrinhoId = localStorage.getItem("carrinhoId")! || "";
    this.itemService.getByCartId(carrinhoId)
      .subscribe((itens) => {
        this.itens = itens;
        console.log(itens);
        this.valorTotal = this.itens.reduce((total, item) => {
          return total + item.preco * item.quantidade;
        }, 0);
      });

  }
  vender(): void {
    let venda: Venda = {
        nome: this.nome,
        formaPagamentoId: this.formapagamentoId,
    };
    this.vendaService.create(venda).subscribe((venda) => {
        console.log(venda);
        this.router.navigate(["produto/listar"]);
    });
}


}
