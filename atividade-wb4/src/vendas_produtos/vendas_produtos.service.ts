import { Injectable } from '@nestjs/common';
import { CreateVendasProdutoDto } from './dto/create-vendas_produto.dto';
import { UpdateVendasProdutoDto } from './dto/update-vendas_produto.dto';

@Injectable()
export class VendasProdutosService {
  create(createVendasProdutoDto: CreateVendasProdutoDto) {
    return 'This action adds a new vendasProduto';
  }

  findAll() {
    return `This action returns all vendasProdutos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendasProduto`;
  }

  update(id: number, updateVendasProdutoDto: UpdateVendasProdutoDto) {
    return `This action updates a #${id} vendasProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendasProduto`;
  }
}
