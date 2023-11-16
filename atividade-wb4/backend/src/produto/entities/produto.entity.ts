import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity({name : 'Produtos'})
export class ProdutoEntity {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nome : string

    @Column()
    descricao : string

    @Column()
    preco : number

    @Column()
    quantidadeVendas : number

    @Column()
    quantidade_vendas_masculino : number

    @Column()
    quantidade_vendas_feminino : number

    @Column()
    valorVendas : number
}
