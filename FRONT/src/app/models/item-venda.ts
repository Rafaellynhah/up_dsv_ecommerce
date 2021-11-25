import { Produto } from "./produto";

export interface ItemVenda {
    id?: number;
    produto: Produto;
    nome: String;
    produtoId: number;
    quantidade: number;
    preco: number;
    descricao: String;
    carrinhoId: string;
    criadoEm?: Date;
}
