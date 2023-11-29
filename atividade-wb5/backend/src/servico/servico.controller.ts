import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Put
} from '@nestjs/common';
import { ServicoService } from './servico.service';
import { CreateServicoDto } from './dto/create-servico.dto';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  async create(@Body() createServicoDto: CreateServicoDto) {
    return await this.servicoService.create(createServicoDto);
  }

  @Get()
  async findAll() {
    return await this.servicoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.servicoService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe) id: string) {
    return await this.servicoService.remove(id);
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body : CreateServicoDto){
    return await this.servicoService.update(id, body)
  }
}
