import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoEntity } from './entities/produto.entity';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoService],
})
export class ProdutoModule {}
