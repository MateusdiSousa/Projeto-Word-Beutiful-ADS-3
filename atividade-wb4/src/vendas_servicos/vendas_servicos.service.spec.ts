import { Test, TestingModule } from '@nestjs/testing';
import { VendasServicosService } from './vendas_servicos.service';

describe('VendasServicosService', () => {
  let service: VendasServicosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendasServicosService],
    }).compile();

    service = module.get<VendasServicosService>(VendasServicosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
