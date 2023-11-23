import { Injectable } from '@nestjs/common';
import { CreateVendasServicoDto } from './dto/create-vendas_servico.dto';
import { UpdateVendasServicoDto } from './dto/update-vendas_servico.dto';

@Injectable()
export class VendasServicosService {
  create(createVendasServicoDto: CreateVendasServicoDto) {
    return 'This action adds a new vendasServico';
  }

  findAll() {
    return `This action returns all vendasServicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendasServico`;
  }

  update(id: number, updateVendasServicoDto: UpdateVendasServicoDto) {
    return `This action updates a #${id} vendasServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendasServico`;
  }
}
