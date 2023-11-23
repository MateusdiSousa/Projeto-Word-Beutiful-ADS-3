import { Module } from '@nestjs/common';
import { VendasProdutosService } from './vendas_produtos.service';
import { VendasProdutosController } from './vendas_produtos.controller';

@Module({
  controllers: [VendasProdutosController],
  providers: [VendasProdutosService],
})
export class VendasProdutosModule {}
