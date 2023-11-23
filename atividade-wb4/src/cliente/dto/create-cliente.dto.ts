export class CreateClienteDto {
  nome: string;
  nomeSocial: string;
  genero: string;
  cpf: number;
  rg: number;
  dataCadastro: Date;
  telefone: number;
  quantidade_produtos_consumidos: number;
  quantidade_servicos_consumidos: number;
  total_gasto_produto: number;
  total_gasto_servico: number;
  total_gasto: number;
}
