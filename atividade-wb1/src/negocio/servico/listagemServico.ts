import Servico from "../../modelo/servico";
import Listagem from "../listagem";
import Entrada from "../../io/entrada";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log('\nComo deseja listar os serviços?');
        console.log('1 - Listar todos os Serviços');
        console.log('2 - Listar 5 serviços mais prestados');
        console.log('3 - Listar os serviços mais prestados');
        console.log('4 - Listar os serviços mais prestados por gênero');

        const opcao = this.entrada.receberNumero('Selecione o método de listagem: ');
        switch (opcao) {
            case 1:
                this.listarTodos();
                break;
            case 2:
                this.listarTop5();
                break
            case 3: 
                this.listarMaisConsumidos();
                break;
            case 4: 
                this.listarPorGenero();
                break
            default:
                this.listarTodos();
                break;
        }
    }

    public listarTodos(): void {
        console.log(`\n Lista de todos os Serviços:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.getNome);
            console.log(`Descrição: ` + servico.getDescricao);
            console.log(`Preço do servico: ` + servico.getPreco)
            console.log(`==================================================`);
        });
        console.log(`\n`);
    }

    public listarTop5(): void {
        console.log(`\n5 Serviços Mais Prestados:`);
        const servicosOrdenados = this.servicos.slice().sort((a, b) => b.consumoTotal - a.consumoTotal);
        const top5 = servicosOrdenados.slice(0, 5);

        top5.forEach(servico => {
            console.log(`Nome: ${servico.getNome}`);
            console.log(`Descrição: ${servico.getDescricao}`);
            console.log(`Preço: ${servico.getPreco}`);
            console.log(`Total de vendas : ${servico.getTotalVendas / servico.preco}`)
        })
        console.log("")
    }

    public listarMaisConsumidos(): void {
        console.log(`\nServiços Mais Prestados:`);
        const servicosOrdenados = this.servicos.slice().sort((a, b) => b.consumoTotal - a.consumoTotal);

        console.log("--------------------------------------------------------")
        servicosOrdenados.forEach(servico => {
            console.log(`Nome: ${servico.getNome}`);
            console.log(`Descrição: ${servico.getDescricao}`);
            console.log(`Preço: ${servico.getPreco}`);
            console.log(`Total de vendas : ${servico.getTotalVendas / servico.preco}`)
            console.log("----------------------------------------------------")
        })
        console.log("")
    }

    public listarPorGenero(): void {
        console.log(`\nServiços mais consumidos por genênero:`)
        const topMasculino = this.servicos.slice().sort((a, b) => b.consumoFeminino - a.consumoFeminino)

        console.log(`Mais consumidos pelos homens: `)
        topMasculino.forEach(servico => {
            console.log(`---------------------------------------------`);
            console.log(`Nome do servico : ${servico.getNome}`);
            console.log(`Descrição : ${servico.getDescricao}`);
            console.log(`Preço : ${servico.getPreco}`);
            console.log(`Quantidade consumida : ${servico.getConsumoMasculino}`)
        })

        console.log("")
        const topFeminino = this.servicos.slice().sort((a, b) => b.consumoFeminino - a.consumoFeminino)

        console.log(`\nMais consumidos pelas Mulheres: `)
        topFeminino.forEach(servico => {
            console.log(`---------------------------------------------`);
            console.log(`Nome do servico : ${servico.getNome}`);
            console.log(`Descrição : ${servico.getDescricao}`);
            console.log(`Preço : ${servico.getPreco}`);
            console.log(`Quantidade consumida : ${servico.getConsumoFeminino}`)
        })
        console.log("")
    }
}