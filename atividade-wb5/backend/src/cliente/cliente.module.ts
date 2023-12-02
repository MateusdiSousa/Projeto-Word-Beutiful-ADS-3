import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { TelefoneEntity } from 'src/cliente/entities/telefone.entity';
import { RgEntity } from 'src/cliente/entities/rg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntity,TelefoneEntity,RgEntity])],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class ClienteModule {}
