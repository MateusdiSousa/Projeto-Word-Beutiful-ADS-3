import Cadastro from "../cadastro";
import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class CadastrarProduto extends Cadastro{
    private produtos !: Array<Produto>;
    private entrada !: Entrada;
    constructor(produtos : Array<Produto>){
        super();
        this.entrada = new Entrada();
        this.produtos = produtos;
    }

    public cadastrar(): void {
        console.log(`\n Início do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Produto: `);
        let desc = this.entrada.receberTexto(`Por favor informe a descrição breve do Produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do Produto: `);

        let produto = new Produto(nome, desc, preco);
        this.produtos.push(produto);
    }
    
}