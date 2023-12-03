import { RgEntity } from 'src/cliente/entities/rg.entity';
import { TelefoneEntity } from 'src/cliente/entities/telefone.entity';
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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  genero: string;

  @Column()
  nomeSocial: string;

  @Column()
  cpf: string;

  @Column()
  dataCadastro: Date;

  @Column({default : 0})
  quantidade_produtos_consumidos: number;

  @Column({default : 0})
  quantidade_servicos_consumidos: number;

  @Column({default : 0, type : 'float'})
  total_gasto_produto: number;

  @Column({default : 0, type : 'float'})
  total_gasto_servico: number;

  @Column({default : 0, type : 'float'})
  total_gasto: number;

  @OneToMany(() => VendasProduto, (produtos_consumidos) => produtos_consumidos.cliente)
  produtos_consumidos : VendasProduto[]

  @OneToMany(() => VendasServico, (servicos_consumidos) => servicos_consumidos.cliente)
  servicos_consumidos : VendasServico[]

  @OneToMany(() => TelefoneEntity, (telefone) => telefone.cliente)
  telefones : TelefoneEntity[]

  @OneToMany(() => RgEntity, (rg) => rg.cliente)
  rgs : RgEntity[]
}
