import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Empresa from "../../modelo/empresa";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {

    private servicos !: Array<Servico>;
    private entrada !: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.entrada = new Entrada;
        this.servicos = servicos;
    }

    public cadastrar(): void {
        console.log(`\n Início do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let desc = this.entrada.receberTexto(`Por favor informe a descrição breve do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);

        let servico = new Servico(nome, desc, preco);
        this.servicos.push(servico);

        console.log(`\n Cadastro de Serviço concluído :)`);
    }
}
