import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutoService {
    create(createProdutoDto: CreateProdutoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProdutoDto: UpdateProdutoDto): string;
    remove(id: number): string;
}
