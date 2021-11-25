import { ItemVenda } from "./item-venda";

export interface Venda {
    id?: number;
    formaPagamentoId: number;
    produto?: ItemVenda;

}
