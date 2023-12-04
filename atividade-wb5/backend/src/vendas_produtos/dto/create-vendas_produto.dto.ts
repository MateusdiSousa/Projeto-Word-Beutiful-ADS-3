import { CreateClienteDto } from "src/cliente/dto/create-cliente.dto"
import { CreateProdutoDto } from "src/produto/dto/create-produto.dto"

export class CreateVendasProdutoDto {
    id : number
    quantidade : number
    valor_total : number
    cliente : CreateClienteDto
    produto : CreateProdutoDto
}
