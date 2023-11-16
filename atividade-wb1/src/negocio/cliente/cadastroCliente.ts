import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let valorRg = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        console.log('1) Masculino 2) Feminino 3) Outro  ')
        let entradaGenero = this.entrada.receberNumero('Por favor informe com qual gênero você se identifica: ');
        let genero = "Outro";
        switch (entradaGenero) {
            case 1:
                genero = "Masculino";
                break;
            case 2:
                genero = "Feminino"
                break;
            default:
                genero = "Outro";
                break;
        }
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)

        let cpf = new CPF(valor, dataEmissao);


        partesData = dataRg.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()        

        dataEmissao = new Date(ano, mes, dia)

        let rg = new RG(valorRg, dataEmissao)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        cliente.getRgs.push(rg)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}