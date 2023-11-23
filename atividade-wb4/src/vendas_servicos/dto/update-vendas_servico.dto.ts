import { PartialType } from '@nestjs/mapped-types';
import { CreateVendasServicoDto } from './create-vendas_servico.dto';

export class UpdateVendasServicoDto extends PartialType(CreateVendasServicoDto) {}
