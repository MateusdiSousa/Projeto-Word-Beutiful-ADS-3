import { CreateVendasServicoDto } from './dto/create-vendas_servico.dto';
import { UpdateVendasServicoDto } from './dto/update-vendas_servico.dto';
export declare class VendasServicosService {
    create(createVendasServicoDto: CreateVendasServicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVendasServicoDto: UpdateVendasServicoDto): string;
    remove(id: number): string;
}
