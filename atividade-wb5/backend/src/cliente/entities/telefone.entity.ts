import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name: 'Telefone'})
export class TelefoneEntity {
@PrimaryGeneratedColumn('uuid')
id : string

@Column()
ddd : string

@Column()
numero : string

@ManyToOne(() => ClienteEntity, (cliente) => cliente.telefones)
cliente : ClienteEntity

}
