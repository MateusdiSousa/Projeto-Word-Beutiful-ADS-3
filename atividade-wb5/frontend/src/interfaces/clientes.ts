import { Telefone } from "./telefones";
import { Rg } from "./rgs";

export interface Cliente{
     nome: string;
     nomeSocial: string;
     genero: string;
     cpf: string;
     rg: Rg[];
     dataCadastro: Date;
     telefone: Telefone[];
     quantidade_produtos_consumidos: number;
     quantidade_servicos_consumidos: number;
     total_gasto_produto: number;
     total_gasto_servico: number;
     total_gasto: number;
}