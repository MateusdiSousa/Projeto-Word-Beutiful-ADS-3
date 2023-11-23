import { VendasProduto } from 'src/vendas_produtos/entities/vendas_produto.entity';
import { VendasServico } from 'src/vendas_servicos/entities/vendas_servico.entity';
export declare class ClienteEntity {
    id: number;
    nome: string;
    genero: string;
    nomeSocial: string;
    cpf: number;
    rg: number;
    dataCadastro: Date;
    telefone: number;
    quantidade_produtos_consumidos: number;
    quantidade_servicos_consumidos: number;
    total_gasto_produto: number;
    total_gasto_servico: number;
    total_gasto: number;
    produtos_consumidos: VendasProduto[];
    servicos_consumidos: VendasServico[];
}
