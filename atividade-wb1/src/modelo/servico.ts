export default class Servico {
    public nome!: string;
    public descricao !:string;
    public preco!: number;
    public consumoFeminino !: number;
    public consumoMasculino !: number;
    public consumoTotal !: number;
    public totalVendas!: number;

    constructor(nome:string, descricao : string, preco:number){
        this.nome = nome;
        this.preco =   parseFloat(preco.toFixed(2));
        this.descricao = descricao;
        this.totalVendas = 0;
        this.consumoFeminino = 0;
        this.consumoMasculino = 0;
        this.consumoTotal = 0;
    }

    public get getNome(){
        return this.nome;
    }

    public get getDescricao(){
        return this.descricao;
    }

    public get getPreco(){
        return this.preco
    }

    public get getTotalVendas(): number{
        return this.totalVendas
    }

    public get getConsumoTotal(): number {
        return this.consumoTotal
    }

    public get getConsumoMasculino(): number {
        return this.consumoMasculino
    }

    public get getConsumoFeminino(): number {
        return this.consumoFeminino
    }

    public set setPreco(preco:number){
        this.preco = parseFloat(preco.toFixed(2));
    }

    public set setDescricao(descricao:string){
        this.descricao = descricao;
    }

    public set setNome(nome:string){
        this.nome = nome;
    }

    public set setTotalVendas(quantidade: number){
        this.totalVendas = this.getTotalVendas + quantidade
    }

    public set setConsumoTotal(quantidade : number){
        this.consumoTotal = this.consumoTotal + quantidade
    }

    public set setConsumoMasculino (quantidade : number){
        this.consumoMasculino= this.consumoMasculino + quantidade;
    }

    public set setConsumoFeminino (quantidade : number){
        this.consumoFeminino= this.consumoFeminino + quantidade;
    }
}