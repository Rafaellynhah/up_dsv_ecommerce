import { ItemVenda } from "./item-venda";

export interface Venda {
    id?: number;
    nome?: String;
    descricao?: String;
    formaPagamentoId: number;
    produto?: ItemVenda;

}
