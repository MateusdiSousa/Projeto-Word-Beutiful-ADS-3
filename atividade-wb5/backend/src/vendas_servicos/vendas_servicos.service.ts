import { Injectable } from '@nestjs/common';
import { CreateVendasServicoDto } from './dto/create-vendas_servico.dto';
import { UpdateVendasServicoDto } from './dto/update-vendas_servico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ProdutoEntity } from 'src/produto/entities/produto.entity';
import { VendasProduto } from 'src/vendas_produtos/entities/vendas_produto.entity';
import { Repository } from 'typeorm'
import { VendasServico } from './entities/vendas_servico.entity';
import { ServicoEntity } from 'src/servico/entities/servico.entity';

@Injectable()
export class VendasServicosService {
  constructor(
    @InjectRepository(VendasServico)
    private serviceVendaServico: Repository<VendasServico>,
    @InjectRepository(ClienteEntity)
    private serviceCliente: Repository<ClienteEntity>,
    @InjectRepository(ServicoEntity)
    private serviceServico: Repository<ServicoEntity>
  ) { }

  async create(data: CreateVendasServicoDto, idServico : string, idCliente : string) {
    const venda = new VendasServico()
    venda.cliente = data.cliente.id
    venda.servico = data.servico.id
    venda.quantidade = data.quantidade
    venda.valor_total = data.valor_total
    this.serviceVendaServico.save(venda)

    const servico = await this.serviceServico.findOne({ where: { id: idServico } })
    servico.quantidade_vendas += venda.quantidade
    servico.valor_total_vendas += venda.quantidade * servico.preco
    this.serviceServico.save(servico)

    const cliente = await this.serviceCliente.findOne({ where: { id: idCliente } })
    cliente.quantidade_servicos_consumidos += venda.quantidade
    cliente.total_gasto_servico += (venda.quantidade * venda.valor_total)
    cliente.total_gasto += (venda.quantidade * venda.valor_total)

    return await this.serviceCliente.save(cliente)
  }

  findAll() {
    return `This action returns all vendasServicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendasServico`;
  }

  update(id: number, updateVendasServicoDto: UpdateVendasServicoDto) {
    return `This action updates a #${id} vendasServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendasServico`;
  }
}
