import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto {
  id: number;
  produto: CreateProdutoDto;
}
