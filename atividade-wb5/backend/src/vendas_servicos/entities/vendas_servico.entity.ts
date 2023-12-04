import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ProdutoEntity } from 'src/produto/entities/produto.entity';
import { ServicoEntity } from 'src/servico/entities/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({name: 'vendas_servicos'})
export class VendasServico {
    @PrimaryGeneratedColumn('increment')
    id : number

    @Column()
    quantidade : number

    @Column({type : 'float'})
    valor_total : number

    @ManyToOne(() => ClienteEntity, (cliente) => cliente.servicos_consumidos)
    cliente : string

    @ManyToOne(() => ServicoEntity, (servico) => servico.servico_vendas)
    servico : string
}
