import { notEqual } from "assert";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Comprar from "../comprar";

export default class ComprarServico extends Comprar {
    private entrada !: Entrada;
    private cliente !: Cliente;
    private servicos !: Array<Servico>;

    constructor(servicos: Array<Servico>) {
        super();
        this.entrada = new Entrada();
        this.servicos = servicos;
    }

    public selecionarCliente(clientes: Array<Cliente>): void {
        console.log("\nSelecione o cliente que realizará a compra");
        console.log("-------------------------------------------");
        clientes.forEach(cliente => {
            console.log(`${clientes.indexOf(cliente) + 1} - nome : ${cliente.nome}`)
        });

        let indexCliente = this.entrada.receberNumero('Digite o numero do cliente que realizará a compra: ') - 1;
        this.cliente = clientes[indexCliente];
    }

    public comprar() {
        console.log("Selecione os serviços que deseja comprar:");
        console.log("------------------------------------------");

        this.servicos.forEach((servico) => {
            console.log(`${this.servicos.indexOf(servico) + 1} - nome : ${servico.getNome} , preço : ${servico.getPreco}`)
        })

        let finalizado = 1;

        while (finalizado == 1) {
            let indexServico = this.entrada.receberNumero("Digite o numero do servico que deseja comprar: ") - 1;
            const servicoRef = this.servicos[indexServico];
            const quantidade = this.entrada.receberNumero(`Quantos ${servicoRef.getNome} serão prestados: `);

            const valorCompra = quantidade * servicoRef.getPreco;

            this.cliente.setQuantidadeServicos = quantidade;
            this.cliente.setTotalGastoServico = valorCompra;
            this.cliente.setTotalGasto = valorCompra;
            servicoRef.setConsumoTotal = quantidade;
            servicoRef.setTotalVendas = valorCompra;

            if (this.cliente.genero == 'Masculino') {
                servicoRef.setConsumoMasculino = quantidade;
            } else if(this.cliente.genero == 'Feminino') {
                servicoRef.setConsumoFeminino = quantidade;
            }

            const nomeFiltro = servicoRef.getNome;
            const descFiltro = servicoRef.getDescricao;

            let objEncontrado: Servico | undefined;

            for (const servico of this.cliente.getServicosConsumidos) {
                if (servico.descricao === descFiltro && servico.nome === nomeFiltro) {
                    objEncontrado = servico
                }
            }

            if (objEncontrado) {
                objEncontrado.setTotalVendas = valorCompra;
                objEncontrado.setConsumoTotal = quantidade;
                this.cliente.setQuantidadeServicos = quantidade;
            } else {
                const servico = new Servico(servicoRef.getNome, servicoRef.getDescricao, servicoRef.getPreco);
                servico.setTotalVendas = valorCompra;
                servico.consumoTotal = quantidade;
                this.cliente.setQuantidadeServicos = quantidade;
                this.cliente.setServicosConsumidos = servico;
            }
            finalizado = this.entrada.receberNumero("Deseja contratar mais um serviço? (1 : sim , 0 : não): ");
        }
    }
}