import { Cliente, ClienteI } from "./clientes";

export interface Produto {
    nome: string;
    descricao: string;
    preco: number;
    quantidade_vendas: number;
    quantidade_vendas_masculino: number;
    quantidade_vendas_feminino: number;
    valor_total_vendas: number;
}

export interface ProdutoI {
    id: string
    nome: string;
    descricao: string;
    preco: number;
    quantidade_vendas: number;
    quantidade_vendas_masculino: number;
    quantidade_vendas_feminino: number;
    valor_total_vendas: number;
}


export interface ProdutoVenda {
    id : number
    quantidade : number
    valor_total : number
    cliente : ClienteI
    produto : ProdutoI
}