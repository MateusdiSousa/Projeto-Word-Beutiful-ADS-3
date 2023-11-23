import { Module } from '@nestjs/common';
import { VendasServicosService } from './vendas_servicos.service';
import { VendasServicosController } from './vendas_servicos.controller';

@Module({
  controllers: [VendasServicosController],
  providers: [VendasServicosService],
})
export class VendasServicosModule {}
