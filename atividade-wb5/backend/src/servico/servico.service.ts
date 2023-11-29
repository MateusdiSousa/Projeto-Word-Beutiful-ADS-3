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
    return await this.servicoRepository.save(servicoDto)
  }

  async findAll() {
    return await this.servicoRepository.find();
  }

  async findOne(id: string) {
    return await this.servicoRepository.findBy({ id: id });
  }

  async update(id: string, data : CreateServicoDto){
    return await this.servicoRepository.update(id, data)
  }

  async remove(id: string) {
    return await this.servicoRepository.delete(id);
  }
}
