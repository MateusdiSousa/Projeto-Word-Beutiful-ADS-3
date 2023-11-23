import { Module } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { ServicoController } from './servico.controller';
import { ServicoEntity } from './entities/servico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ServicoEntity])],
  controllers: [ServicoController],
  providers: [ServicoService],
})
export class ServicoModule {}
