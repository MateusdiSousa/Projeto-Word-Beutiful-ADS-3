import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendasProdutosService } from './vendas_produtos.service';
import { CreateVendasProdutoDto } from './dto/create-vendas_produto.dto';
import { UpdateVendasProdutoDto } from './dto/update-vendas_produto.dto';

@Controller('vendas-produtos')
export class VendasProdutosController {
  constructor(private readonly vendasProdutosService: VendasProdutosService) {}

  @Post()
  create(@Body() createVendasProdutoDto: CreateVendasProdutoDto) {
    return this.vendasProdutosService.create(createVendasProdutoDto);
  }

  @Get()
  findAll() {
    return this.vendasProdutosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendasProdutosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendasProdutoDto: UpdateVendasProdutoDto) {
    return this.vendasProdutosService.update(+id, updateVendasProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendasProdutosService.remove(+id);
  }
}
