import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoEntity } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private servicoRepository: Repository<ProdutoEntity>
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return await this.servicoRepository.save(createProdutoDto);
  }

  async findAll() {
    return await this.servicoRepository.find();
  }

  async findOne(id: string) {
    return await this.servicoRepository.findBy({id : id});
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return await this.servicoRepository.update(id, updateProdutoDto);
  }

  async remove(id: string) {
    return await this.servicoRepository.delete(id);
  }
}
