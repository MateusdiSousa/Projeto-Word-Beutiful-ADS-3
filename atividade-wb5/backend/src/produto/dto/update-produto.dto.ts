import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto {
  id: string;
  produto: CreateProdutoDto;
}
