import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto {
  id: string;
  cliente: CreateClienteDto;
}
