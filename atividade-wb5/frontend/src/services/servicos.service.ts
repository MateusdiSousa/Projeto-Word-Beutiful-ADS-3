import { api } from "../api"
import { Servico, ServicoI } from "../interfaces/servicos"


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

    async update(servico : ServicoI){
        return  await api.put(`servico/${servico.id}`,servico)
    }

    async delete(id : string | undefined){
        return await api.delete(`servico/${id}`)
    }
}

export default new servicoService()