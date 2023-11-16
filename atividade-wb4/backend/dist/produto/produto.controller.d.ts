import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    create(createProdutoDto: CreateProdutoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProdutoDto: UpdateProdutoDto): string;
    remove(id: string): string;
}
