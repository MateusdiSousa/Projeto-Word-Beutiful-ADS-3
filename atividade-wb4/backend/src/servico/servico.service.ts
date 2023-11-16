import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicoEntity } from './entities/servico.entity';
import { Repository } from 'typeorm'


@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(ServicoEntity)
    private servicoRepository: Repository<ServicoEntity>
  ){}

  async create(servicoDto: CreateServicoDto) {
    const newServico =  new ServicoEntity();
    newServico.nome = servicoDto.nome;
    newServico.descricao = servicoDto.desc;
    newServico.preco = servicoDto.preco;
    newServico.quantidadeVendas = 0;
    newServico.quantidade_vendas_feminino = 0;
    newServico.quantidade_vendas_masculino = 0;
    newServico.valorVendas = 0;
    return await this.servicoRepository.save(newServico)
  }

  findAll() {
    return this.servicoRepository.find();
  }

  findOne(id: number) {
    return this.servicoRepository.findBy({id : id})
  }

  remove(id: number) {
    return this.servicoRepository.delete(id);
  }
}
