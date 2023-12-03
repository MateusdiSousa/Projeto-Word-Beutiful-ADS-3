import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name:'RG'})
export class RgEntity {
@PrimaryGeneratedColumn('uuid')
id : string

@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
dataEmissão : Date

@Column()
numero : string

@ManyToOne(() => ClienteEntity, (cliente) => cliente.rgs)
cliente : ClienteEntity

}
