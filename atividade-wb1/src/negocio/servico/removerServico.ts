import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import remover from "../remover";

export default class RemoverServico extends remover{
    private entrada !: Entrada
    private servico !: Servico

    constructor(){
        super()
        this.entrada = new Entrada
    }

    public remover(servicos : Array<Servico>): void {
        console.log("\nSelecione o Servico que será REMOVIDO");
        console.log("-------------------------------------------");
        servicos.forEach(produto => {
            console.log(`${servicos.indexOf(produto) + 1} - nome : ${produto.nome}`)
        });

        let indexproduto = this.entrada.receberNumero('Digite o numero do produto que realizará a compra: ') - 1;
        servicos.slice(indexproduto, 1);

        console.log('Produto Removido')
    }
}