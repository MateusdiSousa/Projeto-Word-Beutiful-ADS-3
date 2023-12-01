import { api } from "../api"
import { Servico } from "../interfaces/servicos"


class servicoService {
    async findAll(){
        return await api.get('/servico')
    }

    async findOne(id : number){
        return await api.get(`/servico/${id}`)
    }

    async post(servico : Servico){
        return await api.post('servico', servico)
    }
}

export default new servicoService()