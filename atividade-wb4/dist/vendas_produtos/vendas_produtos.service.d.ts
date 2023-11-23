import { CreateVendasProdutoDto } from './dto/create-vendas_produto.dto';
import { UpdateVendasProdutoDto } from './dto/update-vendas_produto.dto';
export declare class VendasProdutosService {
    create(createVendasProdutoDto: CreateVendasProdutoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVendasProdutoDto: UpdateVendasProdutoDto): string;
    remove(id: number): string;
}
