import {
  Entity,
  OneToOne,
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
}
