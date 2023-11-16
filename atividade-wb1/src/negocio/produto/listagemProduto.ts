import Produto from "../../modelo/produto";
import Listagem from "../listagem";
import Entrada from "../../io/entrada";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log('\nComo deseja listar os produtos?');
        console.log('1 - Listar todos os produtos');
        console.log('2 - Listar 5 produtos mais prestados');
        console.log('3 - Listar os produtos mais prestados');
        console.log('4 - Listar os produtos mais prestados por gênero');

        const opcao = this.entrada.receberNumero('\nSelecione o método de listagem');
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
        console.log(`\n Lista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.getNome);
            console.log(`Descrição: ` + produto.getDescricao);
            console.log(`Preço do produto: ` + produto.getPreco)
            console.log(`==================================================`);
        });
        console.log(`\n`);
    }

    public listarTop5(): void {
        console.log(`5 produtos Mais Prestados:`);
        const produtosOrdenados = this.produtos.slice().sort((a, b) => b.consumoTotal - a.consumoTotal);
        const top5 = produtosOrdenados.slice(0, 5);

        top5.forEach(produto => {
            console.log(`Nome: ${produto.getNome}`);
            console.log(`Descrição: ${produto.getDescricao}`);
            console.log(`Preço: ${produto.getPreco}`);
            console.log(`Total de vendas : ${produto.getTotalVendas}`)
        })
        console.log("")
    }

    public listarMaisConsumidos(): void {
        console.log(`produtos Mais Prestados:`);
        const produtosOrdenados = this.produtos.slice().sort((a, b) => b.consumoTotal - a.consumoTotal);

        console.log("--------------------------------------------------------")
        produtosOrdenados.forEach(produto => {
            console.log(`Nome: ${produto.getNome}`);
            console.log(`Descrição: ${produto.getDescricao}`);
            console.log(`Preço: ${produto.getPreco}`);
            console.log(`Total de vendas : ${produto.getTotalVendas}`)
            console.log("----------------------------------------------------")
        })
        console.log("")
    }

    public listarPorGenero(): void {
        console.log(`produtos mais consumidos por genênero:`)
        const topMasculino = this.produtos.slice().sort((a, b) => b.consumoFeminino - a.consumoFeminino)

        console.log(`Mais consumidos pelos homens: `)
        topMasculino.forEach(produto => {
            console.log(`---------------------------------------------`);
            console.log(`Nome do produto : ${produto.getNome}`);
            console.log(`Descrição : ${produto.getDescricao}`);
            console.log(`Preço : ${produto.getPreco}`);
            console.log(`Quantidade consumida : ${produto.getConsumoMasculino}`)
        })

        console.log("")
        const topFeminino = this.produtos.slice().sort((a, b) => b.consumoFeminino - a.consumoFeminino)

        console.log(`Mais consumidos pelas Mulheres: `)
        topFeminino.forEach(produto => {
            console.log(`---------------------------------------------`);
            console.log(`Nome do produto : ${produto.getNome}`);
            console.log(`Descrição : ${produto.getDescricao}`);
            console.log(`Preço : ${produto.getPreco}`);
            console.log(`Quantidade consumida : ${produto.getConsumoFeminino}`)
            console.log("")
        })
    }
}