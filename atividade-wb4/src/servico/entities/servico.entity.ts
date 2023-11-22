import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Servicos' })
export class ServicoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @Column()
  quantidade_vendas: number;

  @Column()
  quantidade_vendas_masculino: number;

  @Column()
  quantidade_vendas_feminino: number;

  @Column()
  valor_total_vendas: number;
}
