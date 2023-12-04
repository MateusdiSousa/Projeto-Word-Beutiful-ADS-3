import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { RgEntity } from 'src/cliente/entities/rg.entity';
import { TelefoneEntity } from 'src/cliente/entities/telefone.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
    @InjectRepository(TelefoneEntity)
    private telefoneRepository: Repository<TelefoneEntity>,
    @InjectRepository(RgEntity)
    private RgsRepository: Repository<RgEntity>
  ) { }

  async create(createClienteDto: CreateClienteDto) {
    const user = new ClienteEntity()
    user.nome = createClienteDto.nome
    user.nomeSocial = createClienteDto.nomeSocial
    user.genero = createClienteDto.genero
    user.dataCadastro = createClienteDto.dataCadastro
    user.cpf = createClienteDto.cpf
    user.quantidade_produtos_consumidos = createClienteDto.quantidade_produtos_consumidos
    user.quantidade_servicos_consumidos = createClienteDto.quantidade_servicos_consumidos
    user.total_gasto = createClienteDto.total_gasto
    user.total_gasto_produto = createClienteDto.total_gasto_produto
    user.total_gasto_servico = createClienteDto.total_gasto_servico

    this.clienteRepository.manager.save(user)


    createClienteDto.rgs.forEach(rg => {
      const newRg = new RgEntity
      newRg.cliente = user
      newRg.dataEmissão = rg.dataEmissao
      newRg.numero = rg.numero
      this.RgsRepository.manager.save(newRg)
    })

    createClienteDto.telefones.forEach(telefone => {
      const newTelefone = new TelefoneEntity()
      newTelefone.cliente = user
      newTelefone.ddd = telefone.ddd
      newTelefone.numero = telefone.numero
      this.telefoneRepository.manager.save(newTelefone)
    })
  }

  async findAll() {
    return await this.clienteRepository.find({
      relations: {
        rgs: true,
        telefones: true
      }
    });
  }

  async findOne(id: string) {
    return await this.clienteRepository.find({
      relations: {
        rgs: true,
        telefones: true
      },
      where: { id: id }
    });
  }

  async update(id: string, clienteDto: CreateClienteDto) {
  }

  async remove(id: number) {
    return await this.clienteRepository.delete(id)
  }
}
