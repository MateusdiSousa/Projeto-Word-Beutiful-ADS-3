import { Test, TestingModule } from '@nestjs/testing';
import { VendasProdutosController } from './vendas_produtos.controller';
import { VendasProdutosService } from './vendas_produtos.service';

describe('VendasProdutosController', () => {
  let controller: VendasProdutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendasProdutosController],
      providers: [VendasProdutosService],
    }).compile();

    controller = module.get<VendasProdutosController>(VendasProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
