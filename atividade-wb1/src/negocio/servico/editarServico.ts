import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import editar from "../editar";

export default class EditarServico extends editar {
    private entrada !: Entrada;
    private servico !: Servico;

    constructor() {
        super();
        this.entrada = new Entrada()
    }

    public selecionarServico(servicos : Array<Servico>) : void {
        console.log('\nSelecione o servico que será editado');
        servicos.map((servico) => {
            console.log(`${servicos.indexOf(servico)}) ${servico.nome}`)
        })
        let indexServico = this.entrada.receberNumero('Digite o número do servico que será editado')
        this.servico = servicos[indexServico]
    }

    public editar(): void {
        let editando = true

        while (editando) {
            
            console.log('Digite qual valor você deseja editar do servico: ')
            console.log(`
            1) nome : ${this.servico.nome}
            2) preco : ${this.servico.preco}
            3) descrição : ${this.servico.descricao}
            `)

            let resp = this.entrada.receberNumero('')

            switch (resp) {
                case 1:
                    let nome = this.entrada.receberTexto('Digite o novo nome do servico: ')
                    this.servico.setNome = nome
                    break;
                case 2:
                    let preco = this.entrada.receberNumero('Digite o novo preco do servico: ')
                    this.servico.setPreco = preco
                    break;
                case 3:
                    let desc = this.entrada.receberTexto('Digite a nova descrição do servico: ')
                    this.servico.setNome = desc
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