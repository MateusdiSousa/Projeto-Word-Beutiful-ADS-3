import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }

    public deleteCliente(clienteD : Cliente):void{
        this.clientes = this.clientes.filter(item => item !== clienteD);
    }

    public deleteServico(servicoD : Servico):void{
        this.servicos = this.servicos.filter(item => item !== servicoD);
    }

    public deleteProduto(produtoD : Produto):void{
        this.produtos = this.produtos.filter(item => item !== produtoD);
    }
}