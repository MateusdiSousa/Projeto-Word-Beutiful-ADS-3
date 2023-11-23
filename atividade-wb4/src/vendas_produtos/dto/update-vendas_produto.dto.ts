import { PartialType } from '@nestjs/mapped-types';
import { CreateVendasProdutoDto } from './create-vendas_produto.dto';

export class UpdateVendasProdutoDto extends PartialType(CreateVendasProdutoDto) {}
