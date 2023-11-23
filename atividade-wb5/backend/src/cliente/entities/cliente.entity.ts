import { VendasProduto } from 'src/vendas_produtos/entities/vendas_produto.entity';
import { VendasServico } from 'src/vendas_servicos/entities/vendas_servico.entity';
import {
  Entity,
  OneToMany,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'Clientes' })
export class ClienteEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  genero: string;

  @Column()
  nomeSocial: string;

  @Column()
  cpf: number;

  @Column()
  rg: number;

  @Column()
  dataCadastro: Date;

  @Column()
  telefone: number;

  @Column()
  quantidade_produtos_consumidos: number;

  @Column()
  quantidade_servicos_consumidos: number;

  @Column()
  total_gasto_produto: number;

  @Column()
  total_gasto_servico: number;

  @Column()
  total_gasto: number;

  @OneToMany(() => VendasProduto, (produtos_consumidos) => produtos_consumidos.cliente)
  produtos_consumidos : VendasProduto[]

  @OneToMany(() => VendasServico, (servicos_consumidos) => servicos_consumidos.cliente)
  servicos_consumidos : VendasServico[]
}
