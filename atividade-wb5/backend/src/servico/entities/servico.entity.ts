import { VendasServico } from 'src/vendas_servicos/entities/vendas_servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Servicos' })
export class ServicoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column({type : 'float'})
  preco: number;

  @Column()
  quantidade_vendas: number;

  @Column()
  quantidade_vendas_masculino: number;

  @Column()
  quantidade_vendas_feminino: number;

  @Column({type : 'float'})
  valor_total_vendas: number;

  @OneToMany(() => VendasServico , (vendas) => vendas.servico)
  servico_vendas
}
