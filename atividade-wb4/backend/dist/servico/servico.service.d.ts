import { CreateServicoDto } from './dto/create-servico.dto';
import { ServicoEntity } from './entities/servico.entity';
import { Repository } from 'typeorm';
export declare class ServicoService {
    private servicoRepository;
    constructor(servicoRepository: Repository<ServicoEntity>);
    create(servicoDto: CreateServicoDto): Promise<ServicoEntity>;
    findAll(): Promise<ServicoEntity[]>;
    findOne(id: number): Promise<ServicoEntity[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
