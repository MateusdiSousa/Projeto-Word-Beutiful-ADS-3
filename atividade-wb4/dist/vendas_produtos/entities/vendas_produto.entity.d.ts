import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ProdutoEntity } from 'src/produto/entities/produto.entity';
export declare class VendasProduto {
    id: number;
    quantidade: number;
    valor_total: number;
    cliente: ClienteEntity;
    produto: ProdutoEntity;
}
