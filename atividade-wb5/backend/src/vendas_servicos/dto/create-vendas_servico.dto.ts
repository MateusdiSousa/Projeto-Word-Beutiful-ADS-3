import { CreateClienteDto } from "src/cliente/dto/create-cliente.dto"
import { CreateServicoDto } from "src/servico/dto/create-servico.dto"

export class CreateVendasServicoDto {
    id : number
    quantidade : number
    valor_total : number
    cliente : CreateClienteDto
    servico : CreateServicoDto
}
