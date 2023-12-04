import { ClienteController } from './../cliente/cliente.controller';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendasProdutosService } from './vendas_produtos.service';
import { CreateVendasProdutoDto } from './dto/create-vendas_produto.dto';
import { ClienteService } from 'src/cliente/cliente.service';

@Controller('vendas-produtos')
export class VendasProdutosController {
  constructor(
    private readonly vendasProdutosService: VendasProdutosService,
    ) {}

  @Post()
  create(@Body() createVendasProdutoDto: CreateVendasProdutoDto) {
    return this.vendasProdutosService.create(createVendasProdutoDto, createVendasProdutoDto.produto.id, createVendasProdutoDto.cliente.id);
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
  update(@Param('id') id: string, @Body() updateVendasProdutoDto: CreateVendasProdutoDto) {
    return this.vendasProdutosService.update(+id, updateVendasProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendasProdutosService.remove(+id);
  }
}
