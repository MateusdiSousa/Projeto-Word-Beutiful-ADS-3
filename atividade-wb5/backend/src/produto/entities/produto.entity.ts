import { VendasProduto } from 'src/vendas_produtos/entities/vendas_produto.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'Produtos' })
export class ProdutoEntity {
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

  @OneToMany(() => VendasProduto, (venda_produto) => venda_produto.produto)
  produto_vendas
}
