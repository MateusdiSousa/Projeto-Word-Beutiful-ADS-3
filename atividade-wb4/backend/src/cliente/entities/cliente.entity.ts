import {
  Entity,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import Endereco from '../dto/endereco';
import { EnderecoEntity } from './endereco.entity';

@Entity({name : 'Clientes'})
export class ClienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  cpf : string

  @Column()
  genero: string;

  @Column()
  quantidade_produtos_consumidos : number;

  @Column()
  quantidade_servicos_consumidos : number;

  @Column()
  valor_gasto_servicos : number;

  @Column()
  valor_gasto_produtos : number;

  @Column()
  valor_gasto_total : number;

  @OneToOne(() => EnderecoEntity)
  @JoinColumn()
  endereco: EnderecoEntity;
}
