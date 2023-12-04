import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ProdutoEntity } from 'src/produto/entities/produto.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({name: 'vendas_produtos'})
export class VendasProduto {
    @PrimaryGeneratedColumn('increment')
    id : number

    @Column()
    quantidade : number

    @Column({type : 'float'})
    valor_total : number

    @ManyToOne(() => ClienteEntity, (cliente) => cliente.produtos_consumidos)
    cliente : string

    @ManyToOne(() => ProdutoEntity, (produto) => produto.produto_vendas)
    produto : string
}
