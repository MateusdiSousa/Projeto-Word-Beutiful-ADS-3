import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private quantidadeProdutosConsumidos: number;
    private quantidadeServicosConsumidos: number;
    private servicosConsumidos: Array<Servico>
    private totalGastoProduto : number;
    private totalGastoServico : number;
    private totalGasto: number;

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero : string, rgs : Array<RG>, telefones : Array<Telefone>) {
        this.genero = genero
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.totalGasto = 0;
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = new Array<Produto>
        this.quantidadeProdutosConsumidos = 0;
        this.servicosConsumidos = new Array<Servico>
        this.quantidadeServicosConsumidos = 0;
        this.totalGastoProduto = 0;
        this.totalGastoServico = 0;
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getTotalGasto(): number {
        return parseFloat(this.totalGasto.toFixed(2));
    }

    public get getQuantidadeServicos (){
        return this.quantidadeServicosConsumidos;
    }

    public get getQuantidadeProdutos(){
        return this.quantidadeProdutosConsumidos;
    }

    public get getTotalGastoProduto(){
        return parseFloat(this.totalGastoProduto.toFixed(2))
    }

    public get getTotalGastoServico(){
        return  parseFloat(this.totalGastoServico.toFixed(2))
    }

    public set setTotalGasto( valor : any){
        this.totalGasto += valor;
    }

    public set setQuantidadeProdutos ( valor :any){
        this.quantidadeProdutosConsumidos += valor;
    }

    public set setQuantidadeServicos ( valor : any){
        this.quantidadeServicosConsumidos += valor
    }

    public set setTotalGastoProduto(valor : any){
        this.totalGastoProduto += valor
    }

    public set setTotalGastoServico(valor : any){
        this.totalGastoServico += valor
    }

    public set setProdutosConsumidos(produto : Produto){
        this.produtosConsumidos.push(produto);
    }

    public set setServicosConsumidos(servico : Servico){
        this.servicosConsumidos.push(servico)
    }

    public set setCPF(cpf : CPF){
        this.cpf = cpf
    }

    public set setRG(rgs : Array<RG>){
        this.rgs = rgs
    }

    public set setTelefones(telefones : Array<Telefone>){
        this.telefones = telefones
    }
}