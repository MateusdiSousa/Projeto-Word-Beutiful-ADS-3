import { api } from "../api"
import { Produto } from "../interfaces/produtos"


class produtoService {
    async findAll(){
        return await api.get('produto')
    }

    async findOne(id : number){
        return await api.get(`produto/${id}`)
    }

    async post(produto : Produto){
        return await api.post('produto', produto)
    }
}

export default new produtoService()