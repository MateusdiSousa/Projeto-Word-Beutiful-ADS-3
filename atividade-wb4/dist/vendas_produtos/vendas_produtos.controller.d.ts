import { VendasProdutosService } from './vendas_produtos.service';
import { CreateVendasProdutoDto } from './dto/create-vendas_produto.dto';
import { UpdateVendasProdutoDto } from './dto/update-vendas_produto.dto';
export declare class VendasProdutosController {
    private readonly vendasProdutosService;
    constructor(vendasProdutosService: VendasProdutosService);
    create(createVendasProdutoDto: CreateVendasProdutoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVendasProdutoDto: UpdateVendasProdutoDto): string;
    remove(id: string): string;
}
