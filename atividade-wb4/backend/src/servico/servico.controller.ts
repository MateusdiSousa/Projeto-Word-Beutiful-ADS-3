import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { CreateServicoDto } from './dto/create-servico.dto';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post('cadastrar')
  async create(@Body() createServicoDto: CreateServicoDto) {
    return await this.servicoService.create(createServicoDto);
  }

  @Get()
  async findAll() {
    return await this.servicoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.servicoService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.servicoService.remove(+id);
  }
}
