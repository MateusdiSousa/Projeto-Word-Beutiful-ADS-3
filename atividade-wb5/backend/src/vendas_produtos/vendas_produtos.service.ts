import { Injectable } from '@nestjs/common';
import { CreateVendasProdutoDto } from './dto/create-vendas_produto.dto';
import { VendasProduto } from './entities/vendas_produto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm"
import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ProdutoEntity } from 'src/produto/entities/produto.entity';

@Injectable()
export class VendasProdutosService {
  constructor(
    @InjectRepository(VendasProduto)
    private serviceVendaProduto : Repository<VendasProduto>,
    @InjectRepository(ClienteEntity)
    private serviceCliente : Repository<ClienteEntity>,
    @InjectRepository(ProdutoEntity)
    private serviceProduto : Repository<ProdutoEntity>
  ){}

  async create(data: CreateVendasProdutoDto,idProduto : string, idCliente : string ) {
    const venda = new VendasProduto()
    venda.cliente = data.cliente.id
    venda.produto = data.produto.id
    venda.quantidade = data.quantidade
    venda.valor_total = data.valor_total
    this.serviceVendaProduto.save(venda)

    const produto = await this.serviceProduto.findOne({where: {id : idProduto}})
    produto.quantidade_vendas += venda.quantidade
    produto.valor_total_vendas += venda.quantidade * produto.preco
    this.serviceProduto.save(produto)

    const cliente = await this.serviceCliente.findOne({where: {id : idCliente}})
    cliente.quantidade_produtos_consumidos += venda.quantidade
    cliente.total_gasto_produto += (venda.quantidade * venda.valor_total)
    cliente.total_gasto += (venda.quantidade * venda.valor_total)

    return await this.serviceCliente.save(cliente)
  }

  findAll() {
    return `This action returns all vendasProdutos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendasProduto`;
  }

  update(id: number, updateVendasProdutoDto:  CreateVendasProdutoDto) {
    return `This action updates a #${id} vendasProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendasProduto`;
  }
}
