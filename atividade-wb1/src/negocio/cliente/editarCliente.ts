import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import editar from "../editar";

export default class EditarCliente extends editar {
    private entrada !: Entrada;
    private cliente !: Cliente;
    private rgs !: Array<RG>
    private telefones !: Array<Telefone>

    constructor() {
        super();
        this.entrada = new Entrada();
        this.rgs = []
        this.telefones = []
    }

    public selecionarCliente(clientes: Array<Cliente>): void {
        console.log("\nSelecione o cliente que será editado");
        console.log("-------------------------------------------");
        clientes.forEach(cliente => {
            console.log(`${clientes.indexOf(cliente) + 1} - nome : ${cliente.nome}`)
        });

        let indexCliente = this.entrada.receberNumero('Digite o numero do cliente que realizará a compra: ') - 1;
        this.cliente = clientes[indexCliente];
    }

    public editar(): void {
        let editando = true

        while (editando) {

            console.log('Digite qual valor você deseja editar do cliente ' + this.cliente.nome + ' ?')

            console.log(`
            1) nome : ${this.cliente.nome}
            2) nome social : ${this.cliente.nomeSocial}
            3) genero : ${this.cliente.genero}
            4) cpf : ${this.cliente.getCpf}
            5) rgs : ${this.cliente.getRgs}
            6) telefone : ${this.cliente.getTelefones}
            `)

            let resp = this.entrada.receberNumero('Digite o número correspondente a opção')

            switch (resp) {
                case 1:
                    let nome = this.entrada.receberTexto('\nDigite o novo nome: ')
                    this.cliente.nome = nome
                    break;
                case 2:
                    let nomeSocial = this.entrada.receberTexto('\nDigite o novo nome social: ')
                    this.cliente.nomeSocial = nomeSocial
                    break;
                case 3:
                    console.log('1) Masculino 2) Feminino 3) Outro  ')
                    let entradaGenero = this.entrada.receberNumero('Por favor informe o gênero: ');
                    let genero = "Outro";
                    if (entradaGenero == 1) {
                        genero = 'Masculino'
                    } else if (entradaGenero == 2) {
                        genero = 'Feminino'
                    }
                    this.cliente.genero = genero
                case 4:
                    let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                    let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);

                    let partesData = data.split('/')
                    let ano = new Number(partesData[2].valueOf()).valueOf()
                    let mes = new Number(partesData[1].valueOf()).valueOf()
                    let dia = new Number(partesData[0].valueOf()).valueOf()

                    let dataEmissao = new Date(ano, mes, dia)

                    let cpf = new CPF(valor, dataEmissao);

                    this.cliente.setCPF = cpf
                    break;
                case 5:
                    let isTrue = true
                    while (isTrue) {
                        let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG no padrão dd/mm/yyyy: `);

                        let partesData = dataRg.split('/')

                        let ano = new Number(partesData[2].valueOf()).valueOf()
                        let mes = new Number(partesData[1].valueOf()).valueOf()
                        let dia = new Number(partesData[0].valueOf()).valueOf()

                        let dataEmissao = new Date(ano, mes, dia)

                        var rg = new RG(valorRg, dataEmissao)

                        this.rgs.push(rg)

                        let resp = this.entrada.receberTexto(`Deseja cadastrar mais um RG ? 1) Não 2)Sim `);
                        if (resp == '2') {
                            isTrue = true
                        } else {
                            isTrue = false
                        }
                        this.cliente.setRG = this.rgs
                    }

                    break;
                case 6:
                    isTrue = true

                    while (isTrue) {
                        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do su telefone: `);
                        let numero = this.entrada.receberTexto(`Por favor informe o numero do seu telefone: `);

                        var telefone = new Telefone(ddd, numero)

                        this.telefones.push(telefone)

                        let resp = this.entrada.receberTexto(`Deseja cadastrar mais um telefone ? 1) Não 2)Sim `);
                        if (resp == '2') {
                            isTrue = true
                        } else {
                            isTrue = false
                        }
                    }

                    this.cliente.setTelefones = this.telefones
                    break;
                default:
                    console.log('nada foi editado!')
                    break;
            }
            let respEdit = this.entrada.receberNumero('Deseja continuar editando? 1)SIM    2)NÃO')

            if (respEdit == 2) {
                editando = false
            }
        }
    }
}