import { ClienteI } from "./clientes"
import { ProdutoI } from "./produtos"

export interface VendaProduto {
    id : number
    quantidade : number
    valor_total : number
    cliente : ClienteI
    produto : ProdutoI
}