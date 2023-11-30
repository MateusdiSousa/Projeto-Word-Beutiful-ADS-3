import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import remover from "../remover";

export default class RemoverCliente extends remover {
    private entrada !: Entrada;
    private cliente !: Cliente

    constructor() {
        super();
        this.entrada = new Entrada();
    }

    public remover(clientes: Array<Cliente>): void {
        console.log("\nSelecione o cliente que será REMOVIDO");
        console.log("-------------------------------------------");
        clientes.forEach(cliente => {
            console.log(`${clientes.indexOf(cliente) + 1} - nome : ${cliente.nome}`)
        });

        let indexCliente = this.entrada.receberNumero('Digite o numero do cliente que realizará a compra: ') - 1;
        clientes.slice(indexCliente, 1);

        console.log('Cliente Removido')
    }
}