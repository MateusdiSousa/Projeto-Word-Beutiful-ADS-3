import { ClienteEntity } from 'src/cliente/entities/cliente.entity';
import { ServicoEntity } from 'src/servico/entities/servico.entity';
export declare class VendasServico {
    id: number;
    quantidade: number;
    valor_total: number;
    cliente: ClienteEntity;
    servico: ServicoEntity;
}
