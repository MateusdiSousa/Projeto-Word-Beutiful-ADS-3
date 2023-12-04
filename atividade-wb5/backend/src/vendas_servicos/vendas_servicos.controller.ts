import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendasServicosService } from './vendas_servicos.service';
import { CreateVendasServicoDto } from './dto/create-vendas_servico.dto';
import { UpdateVendasServicoDto } from './dto/update-vendas_servico.dto';

@Controller('vendas-servicos')
export class VendasServicosController {
  constructor(private readonly vendasServicosService: VendasServicosService) {}

  @Post()
  create(@Body() createVendasServicoDto: CreateVendasServicoDto) {
    const idServico = createVendasServicoDto.servico.id
    const idCliente = createVendasServicoDto.cliente.id
    return this.vendasServicosService.create(createVendasServicoDto,idServico, idCliente);
  }

  @Get()
  findAll() {
    return this.vendasServicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendasServicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendasServicoDto: UpdateVendasServicoDto) {
    return this.vendasServicosService.update(+id, updateVendasServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendasServicosService.remove(+id);
  }
}
