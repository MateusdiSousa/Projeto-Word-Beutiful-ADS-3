import { EnderecoEntity } from './endereco.entity';
export declare class ClienteEntity {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    genero: string;
    quantidade_produtos_consumidos: number;
    quantidade_servicos_consumidos: number;
    valor_gasto_servicos: number;
    valor_gasto_produtos: number;
    valor_gasto_total: number;
    endereco: EnderecoEntity;
}
