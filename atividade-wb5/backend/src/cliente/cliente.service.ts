import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    return await this.clienteRepository.save(createClienteDto)
  }

  async findAll() {

    return await this.clienteRepository.find();
  }

  async findOne(id: number) {
    return await this.clienteRepository.findOneBy({id : id});
  }

  async update(id: string, clienteDto: CreateClienteDto) {
    return await this.clienteRepository.update(id, clienteDto)
  }

  async remove(id: number) {
    return await this.clienteRepository.delete(id)
  }
}
