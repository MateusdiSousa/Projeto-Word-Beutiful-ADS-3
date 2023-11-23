import { Test, TestingModule } from '@nestjs/testing';
import { VendasServicosController } from './vendas_servicos.controller';
import { VendasServicosService } from './vendas_servicos.service';

describe('VendasServicosController', () => {
  let controller: VendasServicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendasServicosController],
      providers: [VendasServicosService],
    }).compile();

    controller = module.get<VendasServicosController>(VendasServicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
