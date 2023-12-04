import { api } from "../api";
import { ProdutoVenda } from "../interfaces/produtos";
import { ServicoVenda } from "../interfaces/servicos";

class serviceVenda{
    async createProduto(data : ProdutoVenda){
        return await api.post('vendas-produtos', data)
    }


    async createServico(data : ServicoVenda){
        return await api.post('vendas-servicos', data)
    }
}

export default new serviceVenda()
