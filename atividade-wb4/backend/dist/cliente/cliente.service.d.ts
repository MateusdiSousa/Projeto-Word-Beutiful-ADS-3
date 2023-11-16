import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteService {
    create(createClienteDto: CreateClienteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClienteDto: UpdateClienteDto): string;
    remove(id: number): string;
}
