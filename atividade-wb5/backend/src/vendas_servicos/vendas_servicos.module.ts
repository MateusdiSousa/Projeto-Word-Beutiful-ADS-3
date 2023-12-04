import { Module } from '@nestjs/common';
import { VendasServicosService } from './vendas_servicos.service';
import { VendasServicosController } from './vendas_servicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { VendasServico } from './entities/vendas_servico.entity';
import { ServicoEntity } from 'src/servico/entities/servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VendasServico, ClienteEntity, ServicoEntity])],
  controllers: [VendasServicosController],
  providers: [VendasServicosService],
})
export class VendasServicosModule {}
