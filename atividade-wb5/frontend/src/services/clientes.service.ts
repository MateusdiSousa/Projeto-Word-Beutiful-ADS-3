import { api } from "../api"
import { Cliente } from "../interfaces/clientes"

class clienteService {
     async create(cliente : Cliente) {
          return await api.post('cliente/cadastrar',cliente)
     }

     async findAll(){
          return await api.get('cliente')
     }

     async findOne(id: string | undefined){
          return await api.get(`cliente/${id}`)
     }

     async update(id: string | undefined, cliente: Cliente){
          return await api.put(`cliente/${id}`,cliente)
     }

     async remove(id: string | undefined){
          return await api.delete(`cliente/${id}`)
     }
}

export default new clienteService()