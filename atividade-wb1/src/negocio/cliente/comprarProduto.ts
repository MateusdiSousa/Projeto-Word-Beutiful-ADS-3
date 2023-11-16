import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Comprar from "../comprar";

export default class ComprarProduto extends Comprar {
    private entrada !: Entrada;
    private cliente !: Cliente;
    private produtos !: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super();
        this.entrada = new Entrada();
        this.produtos = produtos;
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
        console.log("Selecione os produtos que deseja comprar:");
        console.log("------------------------------------------");

        this.produtos.forEach((produto) => {
            console.log(`${this.produtos.indexOf(produto) + 1} - nome : ${produto.getNome} , preço : ${produto.getPreco}`)
        })

        let finalizado = 1;

        while (finalizado == 1) {
            let indexProduto = this.entrada.receberNumero("Digite o numero do produto que deseja comprar: ") - 1;
            const produtoRef = this.produtos[indexProduto];
            const quantidade = this.entrada.receberNumero(`Quantos ${produtoRef.getNome} serão comprados: `);

            const valorCompra = quantidade * produtoRef.getPreco;

            this.cliente.setQuantidadeProdutos = quantidade;
            this.cliente.setTotalGastoProduto = valorCompra;
            this.cliente.setTotalGasto = valorCompra;
            produtoRef.setConsumoTotal = quantidade;
            produtoRef.setTotalVendas = quantidade;

            const nomeFiltro = produtoRef.getNome;
            const descFiltro = produtoRef.getDescricao;

            let objEncontrado: Produto | undefined;

            for (const produto of this.cliente.getProdutosConsumidos) {
                if (produto.descricao === descFiltro && produto.nome === nomeFiltro) {
                    objEncontrado = produto
                }
            }

            if (objEncontrado) {
                objEncontrado.setTotalVendas = valorCompra;
                objEncontrado.setConsumoTotal = quantidade;
                this.cliente.setQuantidadeProdutos = quantidade;
            } else {
                const produto = new Produto(produtoRef.getNome, produtoRef.getDescricao, produtoRef.getPreco);
                produto.setTotalVendas = valorCompra;
                produto.setConsumoTotal = quantidade;

                console.log("consumo total do produto: "+produto.getConsumoTotal)
                console.log('total de vendas: '+produto.getTotalVendas)

                this.cliente.setQuantidadeProdutos = quantidade;
                this.cliente.setProdutosConsumidos = produto;
            }
            finalizado = this.entrada.receberNumero("Deseja comprar mais um produto? (1 : sim , 0 : não) : ");
        }
    }
}