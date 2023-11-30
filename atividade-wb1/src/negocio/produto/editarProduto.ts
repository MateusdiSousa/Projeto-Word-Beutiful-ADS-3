import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import editar from "../editar";

export default class EditarProduto extends editar {
    private entrada !: Entrada;
    private produto !: Produto;

    constructor() {
        super();
        this.entrada = new Entrada()
    }

    public selecionarProduto(produtos : Array<Produto>) : void {
        console.log('\nSelecione o produto que será editado');
        produtos.map((produto) => {
            console.log(`${produtos.indexOf(produto)}) ${produto.nome}`)
        })
        let indexProduto = this.entrada.receberNumero('Digite o número do produto que será editado')
        this.produto = produtos[indexProduto]
    }

    public editar(): void {
        let editando = true

        while (editando) {
            
            console.log('Digite qual valor você deseja editar do produto: ')
            console.log(`
            1) nome : ${this.produto.nome}
            2) preco : ${this.produto.preco}
            3) descrição : ${this.produto.descricao}
            `)

            let resp = this.entrada.receberNumero('')

            switch (resp) {
                case 1:
                    let nome = this.entrada.receberTexto('Digite o novo nome do produto: ')
                    this.produto.setNome = nome
                    break;
                case 2:
                    let preco = this.entrada.receberNumero('Digite o novo preco do produto: ')
                    this.produto.setPreco = preco
                    break;
                case 3:
                    let desc = this.entrada.receberTexto('Digite a nova descrição do produto: ')
                    this.produto.setNome = desc
                    break;    
                default:
                    console.log('NENHUM ITEM SELECIONADO')
                    break;
            }
            
            let respEdit = this.entrada.receberNumero('Você deseja continuar editando? 1) Sim   2) Não')

            if (respEdit == 2) {
                editando = false
            }
        }
    }
}