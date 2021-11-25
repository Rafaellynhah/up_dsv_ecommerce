import { ItemVenda } from "./item-venda";

export interface Venda {
    id?: number;
    metodoPagamentoId: number;
    produto?: ItemVenda;

}
