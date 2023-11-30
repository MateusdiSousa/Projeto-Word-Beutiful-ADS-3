"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\n1 - Listar todos");
        console.log("2 - Listar clientes que mais consumiram (em quantidade)");
        console.log("3 - Listar clientes menos consumiram (em quantidade)");
        console.log("4 - Listar clientes que mais consumiram");
        console.log("5 - Listar clientes por gen\u00EAro");
        console.log("6 - Detalhes de um cliente");
        var opcao = this.entrada.receberNumero("Selecione o método de listagem: ");
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
                var cpf = this.entrada.receberTexto('Digite o cpf do cliente: ');
                this.listarCliente(cpf);
                break;
            default:
                this.listarTodos();
                break;
        }
    };
    ListagemClientes.prototype.listarTodos = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("");
            console.log("\nProdutos Consumidos:");
            cliente.getProdutosConsumidos.forEach(function (produto) {
                console.log("Nome do Produto: ".concat(produto.getNome));
                console.log("Descri\u00E7\u00E3o: ".concat(produto.getDescricao));
                console.log("Pre\u00E7o: ".concat(produto.getPreco.toFixed(2)));
                console.log("Quantidade: ".concat(produto.getConsumoTotal));
                console.log("\n");
            });
            console.log("Valor total de produtos consumidos: ".concat(cliente.getTotalGastoProduto.toFixed(2)));
            console.log("\nServi\u00E7os Consumidos:");
            cliente.getServicosConsumidos.forEach(function (servico) {
                console.log("Nome do Servi\u00E7o: ".concat(servico.getNome));
                console.log("Descri\u00E7\u00E3o: ".concat(servico.getDescricao));
                console.log("Pre\u00E7o: ".concat(servico.getPreco.toFixed(2)));
                console.log("Quantidade: ".concat(servico.getTotalVendas));
                console.log('\n');
            });
            console.log("Valor total de servicos consumidos: ".concat(cliente.getTotalGastoServico.toFixed(2)));
            console.log("\nTotal Gasto: ".concat(cliente.getTotalGasto.toFixed(2)));
            console.log("===========================================================");
        });
    };
    ListagemClientes.prototype.listarCliente = function (cpf) {
        var cliente = this.clientes.find(function (cliente) { return cliente.getCpf.getValor === cpf; });
        if (cliente) {
            console.log("Hist\u00F3rico do Cliente");
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("\nProdutos Consumidos:");
            cliente.getProdutosConsumidos.forEach(function (produto) {
                console.log("Nome do Produto: ".concat(produto.getNome));
                console.log("Descri\u00E7\u00E3o: ".concat(produto.getDescricao));
                console.log("Pre\u00E7o: ".concat(produto.getPreco));
                console.log("Quantidade: ".concat(produto.getTotalVendas, " \n"));
            });
            console.log("\nServi\u00E7os Consumidos:");
            cliente.getServicosConsumidos.forEach(function (servico) {
                console.log("Nome do Servi\u00E7o: ".concat(servico.getNome));
                console.log("Descri\u00E7\u00E3o: ".concat(servico.getDescricao));
                console.log("Pre\u00E7o: ".concat(servico.getPreco));
                console.log("Quantidade: ".concat(servico.getTotalVendas, " \n"));
            });
            console.log("\nTotal Gasto: ".concat(cliente.getTotalGasto));
            console.log("--------------------------------------\n");
        }
        ;
        console.log("\n");
    };
    ListagemClientes.prototype.listarQuantidadeConsumoMaior = function () {
        console.log("\n10 Clientes que mais consumiram Produtos (em quantidade):");
        var clientesPorProdutos = this.clientes.slice().sort(function (a, b) { return b.getQuantidadeProdutos - a.getQuantidadeProdutos; });
        var top10ClientesProdutos = clientesPorProdutos.slice(0, 10);
        top10ClientesProdutos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade de produtos consumidos: ".concat(cliente.getQuantidadeProdutos));
            console.log("--------------------------------------");
            console.log("");
        });
        console.log("\n10 Clientes que mais consumiram Servi\u00E7os (em quantidade): \n");
        var clientesPorServicos = this.clientes.slice().sort(function (a, b) { return b.getQuantidadeServicos - a.getQuantidadeServicos; });
        var top10ClientesServicos = clientesPorServicos.slice(0, 10);
        top10ClientesServicos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade de servi\u00E7os consumidos: ".concat(cliente.getQuantidadeServicos));
            console.log("--------------------------------------");
            console.log("");
        });
    };
    ListagemClientes.prototype.listarQuantidadeConsumoMenor = function () {
        console.log("\n10 Clientes que menos consumiram Produtos (em quantidade):\n");
        var clientesPorProdutos = this.clientes.slice().sort(function (a, b) { return a.getQuantidadeProdutos - b.getQuantidadeProdutos; });
        var top10ClientesProdutos = clientesPorProdutos.slice(0, 10);
        top10ClientesProdutos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade de produtos consumidos: " + cliente.getQuantidadeProdutos);
            console.log("--------------------------------------");
            console.log("");
        });
        console.log("\n10 Clientes que menos consumiram Servi\u00E7os (em quantidade):\n");
        var clientesPorServicos = this.clientes.slice().sort(function (a, b) { return a.getQuantidadeServicos - b.getQuantidadeServicos; });
        var top10ClientesServicos = clientesPorServicos.slice(0, 10);
        top10ClientesServicos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade de servi\u00E7os consumidos: " + cliente.getQuantidadeServicos);
            console.log("--------------------------------------");
            console.log("");
        });
    };
    ListagemClientes.prototype.listarValorConsumo = function () {
        console.log("\n5 clientes que mais consumiram \n");
        var clientes = this.clientes.slice().sort(function (a, b) {
            return b.getTotalGasto - a.getTotalGasto;
        });
        var top5clientes = clientes.slice(0, 5);
        top5clientes.forEach(function (c) {
            console.log("Nome: ".concat(c.nome));
            console.log("Nome social: ".concat(c.nomeSocial));
            console.log("CPF: ".concat(c.getCpf.getValor));
            console.log("Valor total gasto: ".concat(c.getTotalGasto));
            console.log("");
        });
    };
    ListagemClientes.prototype.listarClientesPorGenero = function () {
        console.log("\nClientes do Gen\u00EAro Masculino\n");
        var clientesHomens = this.clientes.filter(function (masculino) { return (masculino.genero == 'Masculino'); });
        clientesHomens.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
            console.log("Nome Social: ".concat(cliente.nomeSocial));
            console.log("CPF: ".concat(cliente.getCpf.getValor));
            console.log("Total Gasto: ".concat(cliente.getTotalGasto));
            console.log("-------------------------------------------");
            console.log("");
        });
        console.log("");
        console.log('\nClientes do Gênero Feminino:');
        var clientesMulheres = this.clientes.filter(function (feminino) { return (feminino.genero == 'Feminino'); });
        clientesMulheres.forEach(function (cliente) {
            console.log("Nome: ".concat(cliente.nome));
            console.log("Nome Social: ".concat(cliente.nomeSocial));
            console.log("CPF: ".concat(cliente.getCpf));
            console.log("Total Gasto: ".concat(cliente.getTotalGasto));
            console.log("-------------------------------------------");
            console.log("");
        });
        console.log("");
        console.log("Clientes que se identificam com outros:");
        var clientesOutros = this.clientes.filter(function (outros) { return (outros.genero == 'Outro'); });
        clientesOutros.forEach(function (cliente) {
            console.log("-------------------------------------------");
            console.log("Nome: ".concat(cliente.nome));
            console.log("Nome Social: ".concat(cliente.nomeSocial));
            console.log("CPF: ".concat(cliente.getCpf));
            console.log("Total Gasto: ".concat(cliente.getTotalGasto));
            console.log("");
        });
        console.log("================================================");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
