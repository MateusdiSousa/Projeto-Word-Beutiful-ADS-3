export interface Cliente{
     nome: string;
     nomeSocial: string;
     genero: string;
     cpf: string;
     rg: string;
     dataCadastro: Date;
     telefone: string;
     quantidade_produtos_consumidos: number;
     quantidade_servicos_consumidos: number;
     total_gasto_produto: number;
     total_gasto_servico: number;
     total_gasto: number;
}