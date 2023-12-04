export class CreateProdutoDto {
  id: string
  nome: string;
  descricao: string;
  preco: number;
  quantidade_vendas: number;
  quantidade_vendas_masculino: number;
  quantidade_vendas_feminino: number;
  valor_total_vendas: number;
}
