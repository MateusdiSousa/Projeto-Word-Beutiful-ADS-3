import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import remover from "../remover";

export default class RemoverProduto extends remover{
    private entrada !: Entrada
    private produto !: Produto

    constructor(){
        super()
        this.entrada = new Entrada
    }

    public remover(produtos : Array<Produto>): void {
        console.log("\nSelecione o produto que será REMOVIDO");
        console.log("-------------------------------------------");
        produtos.forEach(produto => {
            console.log(`${produtos.indexOf(produto) + 1} - nome : ${produto.nome}`)
        });

        let indexproduto = this.entrada.receberNumero('Digite o numero do produto que realizará a compra: ') - 1;
        produtos.slice(indexproduto, 1);

        console.log('Produto Removido')
    }
}