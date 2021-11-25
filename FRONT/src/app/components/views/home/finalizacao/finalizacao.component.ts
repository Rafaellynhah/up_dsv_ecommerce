import { Component, OnInit } from '@angular/core';
import { ItemVenda } from "src/app/models/item-venda";
import { ItemService } from "src/app/services/item.service";
import { MetodoPagamentoService } from "src/app/services/metodopagamento.service";
import { Router } from "@angular/router";
import { metodoPagamento } from "src/app/models/metodoPagamento";
import { Venda } from "src/app/models/venda";
import { VendaService } from "src/app/services/venda.service";
@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent implements OnInit {
  itens: ItemVenda[] = [];
  valorTotal!: number;
  metodopagamento: metodoPagamento[] = [];
  nome!: string;
  metodopagamentoId!: number;
  constructor(private itemService: ItemService, private router: Router, private metodoPagamento: metodoPagamentoService, private vendaService: VendaService,) { }

  ngOnInit(): void {
    this.metodoPagamento.list().subscribe((MetodoPagamento) => {
      this.MetodoPagamento = MetodoPagamento;
      console.log(this.MetodoPagamento);
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
        MetodoPagamentoId: this.MetodoPagamentoId,
    };
    this.vendaService.create(venda).subscribe((venda) => {
        console.log(venda);
        this.router.navigate(["produto/listar"]);
    });
}


}
