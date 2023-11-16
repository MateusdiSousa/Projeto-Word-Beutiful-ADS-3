import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ComprarProduto from "../negocio/cliente/comprarProduto";
import ComprarServico from "../negocio/cliente/comprarServico";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import CadastrarProduto from "../negocio/produto/cadastrarProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServicos from "../negocio/servico/listagemServico";
import { Teste } from "../negocio/teste";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar serviço`);
    console.log(`4 - Listar servico`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar produto`);
    console.log(`7 - Comprar Produto`);
    console.log(`8 - Comprar Serviço`);
    console.log(`9 - Criar ambiente de teste`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes)
            listagemCliente.listar()
            break;
        case 3:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar();
            break;
        case 4:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar();
            break;
        case 5:
            let cadastroProduto = new CadastrarProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos);
            listagemProduto.listar()
            break;
        case 7:
            let comprarProduto = new ComprarProduto(empresa.getProdutos)
            comprarProduto.selecionarCliente(empresa.getClientes);
            comprarProduto.comprar();
            break;
        case 8:
            let comprarServico = new ComprarServico(empresa.getServicos)
            comprarServico.selecionarCliente(empresa.getClientes);
            comprarServico.comprar();
            break;
        case 9:
            let teste = new Teste(empresa.getServicos,empresa.getProdutos,empresa.getClientes)
            teste.ContruirAmbiente()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}