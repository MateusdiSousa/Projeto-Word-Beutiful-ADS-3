import { Test, TestingModule } from '@nestjs/testing';
import { VendasProdutosService } from './vendas_produtos.service';

describe('VendasProdutosService', () => {
  let service: VendasProdutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendasProdutosService],
    }).compile();

    service = module.get<VendasProdutosService>(VendasProdutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
