import { format } from "path";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import CPF from "../../modelo/cpf";
import Entrada from "../../io/entrada";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log("\n1 - Listar todos")
        console.log(`2 - Listar clientes que mais consumiram (em quantidade)`)
        console.log(`3 - Listar clientes menos consumiram (em quantidade)`)
        console.log(`4 - Listar clientes que mais consumiram`);
        console.log(`5 - Listar clientes por genêro`)
        console.log(`6 - Detalhes de um cliente`)

        const opcao = this.entrada.receberNumero("Selecione o método de listagem: ")

        switch (opcao) {
            case 1:
                this.listarTodos();
                break;
            case 2:
                this.listarQuantidadeConsumoMaior();
                break;
            case 3:
                this.listarQuantidadeConsumoMenor();
                break;
            case 4:
                this.listarValorConsumo();
                break;
            case 5:
                this.listarClientesPorGenero();
                break;
            case 6:
                const cpf = this.entrada.receberTexto('Digite o cpf do cliente: ');
                this.listarCliente(cpf);
                break;
            default:
                this.listarTodos();
                break;
        }

    }

    public listarTodos(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(``);

            console.log(`\nProdutos Consumidos:`)
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`Nome do Produto: ${produto.getNome}`);
                console.log(`Descrição: ${produto.getDescricao}`);
                console.log(`Preço: ${produto.getPreco.toFixed(2)}`);
                console.log(`Quantidade: ${produto.getConsumoTotal}`);
                console.log("\n")
            })

            console.log(`Valor total de produtos consumidos: ${cliente.getTotalGastoProduto.toFixed(2)}`)

            console.log(`\nServiços Consumidos:`)
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`Nome do Serviço: ${servico.getNome}`);
                console.log(`Descrição: ${servico.getDescricao}`);
                console.log(`Preço: ${servico.getPreco.toFixed(2)}`);
                console.log(`Quantidade: ${servico.getTotalVendas}`);
                console.log('\n')
            })

            console.log(`Valor total de servicos consumidos: ${cliente.getTotalGastoServico.toFixed(2)}`)

            console.log(`\nTotal Gasto: ${cliente.getTotalGasto.toFixed(2)}`)
            console.log(`===========================================================`);

        });
    }

    public listarCliente(cpf: string): void {
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (cliente) {
            console.log(`Histórico do Cliente`)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);

            console.log(`\nProdutos Consumidos:`)
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`Nome do Produto: ${produto.getNome}`);
                console.log(`Descrição: ${produto.getDescricao}`);
                console.log(`Preço: ${produto.getPreco}`);
                console.log(`Quantidade: ${produto.getTotalVendas} \n`);
            })

            console.log(`\nServiços Consumidos:`)
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`Nome do Serviço: ${servico.getNome}`);
                console.log(`Descrição: ${servico.getDescricao}`);
                console.log(`Preço: ${servico.getPreco}`);
                console.log(`Quantidade: ${servico.getTotalVendas} \n`);
            })
            console.log(`\nTotal Gasto: ${cliente.getTotalGasto}`)
            console.log(`--------------------------------------\n`);

        };
        console.log(`\n`);
    }

    listarQuantidadeConsumoMaior(): void {
        console.log(`\n10 Clientes que mais consumiram Produtos (em quantidade):`)
        const clientesPorProdutos = this.clientes.slice().sort((a, b) => b.getQuantidadeProdutos - a.getQuantidadeProdutos);
        const top10ClientesProdutos = clientesPorProdutos.slice(0, 10);

        top10ClientesProdutos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Quantidade de produtos consumidos: ${cliente.getQuantidadeProdutos}`)
            console.log(`--------------------------------------`);
            console.log(``)
        });

        console.log(`\n10 Clientes que mais consumiram Serviços (em quantidade): \n`)
        const clientesPorServicos = this.clientes.slice().sort((a, b) => b.getQuantidadeServicos - a.getQuantidadeServicos);
        const top10ClientesServicos = clientesPorServicos.slice(0, 10);

        top10ClientesServicos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Quantidade de serviços consumidos: ${cliente.getQuantidadeServicos}`)
            console.log(`--------------------------------------`);
            console.log("");
        });
    }

    listarQuantidadeConsumoMenor(): void {
        console.log(`\n10 Clientes que menos consumiram Produtos (em quantidade):\n`)
        const clientesPorProdutos = this.clientes.slice().sort((a, b) => a.getQuantidadeProdutos - b.getQuantidadeProdutos);
        const top10ClientesProdutos = clientesPorProdutos.slice(0, 10);

        top10ClientesProdutos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Quantidade de produtos consumidos: ` + cliente.getQuantidadeProdutos)
            console.log(`--------------------------------------`);
            console.log(``)
        });

        console.log(`\n10 Clientes que menos consumiram Serviços (em quantidade):\n`)
        const clientesPorServicos = this.clientes.slice().sort((a, b) => a.getQuantidadeServicos - b.getQuantidadeServicos);
        const top10ClientesServicos = clientesPorServicos.slice(0, 10);

        top10ClientesServicos.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Quantidade de serviços consumidos: ` + cliente.getQuantidadeServicos)
            console.log(`--------------------------------------`);
            console.log(``)
        });
    }

    listarValorConsumo(): void {
        console.log(`\n5 clientes que mais consumiram \n`);
        const clientes = this.clientes.slice().sort((a, b) =>
            b.getTotalGasto - a.getTotalGasto
        )

        const top5clientes = clientes.slice(0, 5);

        top5clientes.forEach((c) => {
            console.log(`Nome: ${c.nome}`);
            console.log(`Nome social: ${c.nomeSocial}`);
            console.log(`CPF: ${c.getCpf.getValor}`)
            console.log(`Valor total gasto: ${c.getTotalGasto}`)
            console.log(``)
        })
    }

    listarClientesPorGenero(): void {
        console.log(`\nClientes do Genêro Masculino\n`)
        const clientesHomens = this.clientes.filter(masculino => (masculino.genero == 'Masculino'))

        clientesHomens.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome Social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`Total Gasto: ${cliente.getTotalGasto}`);
            console.log(`-------------------------------------------`)
            console.log(``)
        })

        console.log("")
        console.log('\nClientes do Gênero Feminino:')
        const clientesMulheres = this.clientes.filter(feminino => (feminino.genero == 'Feminino'));

        clientesMulheres.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome Social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf}`);
            console.log(`Total Gasto: ${cliente.getTotalGasto}`);
            console.log(`-------------------------------------------`)
            console.log(``)
        })

        console.log("")
        console.log("Clientes que se identificam com outros:")
        const clientesOutros = this.clientes.filter(outros => (outros.genero == 'Outro'));

        clientesOutros.forEach(cliente => {
            console.log(`-------------------------------------------`)
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome Social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf}`);
            console.log(`Total Gasto: ${cliente.getTotalGasto}`);
            console.log(``)
        })

        console.log("================================================")
    }
}