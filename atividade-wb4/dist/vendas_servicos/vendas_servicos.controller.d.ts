import { VendasServicosService } from './vendas_servicos.service';
import { CreateVendasServicoDto } from './dto/create-vendas_servico.dto';
import { UpdateVendasServicoDto } from './dto/update-vendas_servico.dto';
export declare class VendasServicosController {
    private readonly vendasServicosService;
    constructor(vendasServicosService: VendasServicosService);
    create(createVendasServicoDto: CreateVendasServicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVendasServicoDto: UpdateVendasServicoDto): string;
    remove(id: string): string;
}
