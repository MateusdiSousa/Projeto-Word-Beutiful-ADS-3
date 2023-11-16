import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'Enderecos'})
export class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  codigoPostal: number;

  @Column()
  informacoesAdicionais: string;
}
