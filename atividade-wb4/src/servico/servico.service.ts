import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicoEntity } from './entities/servico.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(ServicoEntity)
    private servicoRepository: Repository<ServicoEntity>,
  ) {}

  async create(servicoDto: CreateServicoDto) {
    return;
  }

  findAll() {
    return this.servicoRepository.find();
  }

  findOne(id: number) {
    return this.servicoRepository.findBy({ id: id });
  }

  remove(id: number) {
    return this.servicoRepository.delete(id);
  }
}
