import { Module } from '@nestjs/common';
import { VendasProdutosService } from './vendas_produtos.service';
import { VendasProdutosController } from './vendas_produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendasProduto } from './entities/vendas_produto.entity';
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ProdutoEntity } from 'src/produto/entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VendasProduto, ClienteEntity, ProdutoEntity])],
  controllers: [VendasProdutosController],
  providers: [VendasProdutosService],
})
export class VendasProdutosModule {}
