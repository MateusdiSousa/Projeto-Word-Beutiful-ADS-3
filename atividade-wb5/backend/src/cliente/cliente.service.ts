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
    private telefoneRepository : Repository<TelefoneEntity>,
    @InjectRepository(RgEntity)
    private RgsRepository : Repository<RgEntity>
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const user = new ClienteEntity()
    user.nome = createClienteDto.nome
    user.nomeSocial = createClienteDto.nomeSocial
    user.genero = createClienteDto.genero
    user.dataCadastro = createClienteDto.dataCadastro
    this.clienteRepository.save(user)
    
    const rgs = new Array<RgEntity>
    createClienteDto.rgs.forEach(rg => {
      const newRg = new RgEntity
      newRg.cliente = user
      newRg.dataEmissão = rg.dataEmissao
      newRg.numero = rg.numero
      this.RgsRepository.save(newRg)
    })

    const telefones = new Array<TelefoneEntity>
    createClienteDto.telefones.forEach( telefone => {
      const newTelefone = new TelefoneEntity()
      newTelefone.cliente = user
      newTelefone.telefone = `(${telefone.ddd}) ${telefone.numero}`
      this.telefoneRepository.save(newTelefone)
    })
  }

  async findAll() {

    return await this.clienteRepository.find();
  }

  async findOne(id: string) {
    return await this.clienteRepository.findOneBy({id : id});
  }

  async update(id: string, clienteDto: CreateClienteDto) {
  }

  async remove(id: number) {
    return await this.clienteRepository.delete(id)
  }
}
