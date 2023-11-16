import { ServicoService } from './servico.service';
import { CreateServicoDto } from './dto/create-servico.dto';
export declare class ServicoController {
    private readonly servicoService;
    constructor(servicoService: ServicoService);
    create(createServicoDto: CreateServicoDto): Promise<import("./entities/servico.entity").ServicoEntity>;
    findAll(): Promise<import("./entities/servico.entity").ServicoEntity[]>;
    findOne(id: string): Promise<import("./entities/servico.entity").ServicoEntity[]>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
