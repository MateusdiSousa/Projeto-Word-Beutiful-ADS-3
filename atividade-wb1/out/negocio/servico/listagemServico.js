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
var ListagemServicos = /** @class */ (function (_super) {
    __extends(ListagemServicos, _super);
    function ListagemServicos(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ListagemServicos.prototype.listar = function () {
        console.log('\nComo deseja listar os serviços?');
        console.log('1 - Listar todos os Serviços');
        console.log('2 - Listar 5 serviços mais prestados');
        console.log('3 - Listar os serviços mais prestados');
        console.log('4 - Listar os serviços mais prestados por gênero');
        var opcao = this.entrada.receberNumero('Selecione o método de listagem: ');
        switch (opcao) {
            case 1:
                this.listarTodos();
                break;
            case 2:
                this.listarTop5();
                break;
            case 3:
                this.listarMaisConsumidos();
                break;
            case 4:
                this.listarPorGenero();
                break;
            default:
                this.listarTodos();
                break;
        }
    };
    ListagemServicos.prototype.listarTodos = function () {
        console.log("\n Lista de todos os Servi\u00E7os:");
        this.servicos.forEach(function (servico) {
            console.log("Nome: " + servico.getNome);
            console.log("Descri\u00E7\u00E3o: " + servico.getDescricao);
            console.log("Pre\u00E7o do servico: " + servico.getPreco);
            console.log("==================================================");
        });
        console.log("\n");
    };
    ListagemServicos.prototype.listarTop5 = function () {
        console.log("\n5 Servi\u00E7os Mais Prestados:");
        var servicosOrdenados = this.servicos.slice().sort(function (a, b) { return b.consumoTotal - a.consumoTotal; });
        var top5 = servicosOrdenados.slice(0, 5);
        top5.forEach(function (servico) {
            console.log("Nome: ".concat(servico.getNome));
            console.log("Descri\u00E7\u00E3o: ".concat(servico.getDescricao));
            console.log("Pre\u00E7o: ".concat(servico.getPreco));
            console.log("Total de vendas : ".concat(servico.getTotalVendas / servico.preco));
        });
        console.log("");
    };
    ListagemServicos.prototype.listarMaisConsumidos = function () {
        console.log("\nServi\u00E7os Mais Prestados:");
        var servicosOrdenados = this.servicos.slice().sort(function (a, b) { return b.consumoTotal - a.consumoTotal; });
        console.log("--------------------------------------------------------");
        servicosOrdenados.forEach(function (servico) {
            console.log("Nome: ".concat(servico.getNome));
            console.log("Descri\u00E7\u00E3o: ".concat(servico.getDescricao));
            console.log("Pre\u00E7o: ".concat(servico.getPreco));
            console.log("Total de vendas : ".concat(servico.getTotalVendas / servico.preco));
            console.log("----------------------------------------------------");
        });
        console.log("");
    };
    ListagemServicos.prototype.listarPorGenero = function () {
        console.log("\nServi\u00E7os mais consumidos por gen\u00EAnero:");
        var topMasculino = this.servicos.slice().sort(function (a, b) { return b.consumoFeminino - a.consumoFeminino; });
        console.log("Mais consumidos pelos homens: ");
        topMasculino.forEach(function (servico) {
            console.log("---------------------------------------------");
            console.log("Nome do servico : ".concat(servico.getNome));
            console.log("Descri\u00E7\u00E3o : ".concat(servico.getDescricao));
            console.log("Pre\u00E7o : ".concat(servico.getPreco));
            console.log("Quantidade consumida : ".concat(servico.getConsumoMasculino));
        });
        console.log("");
        var topFeminino = this.servicos.slice().sort(function (a, b) { return b.consumoFeminino - a.consumoFeminino; });
        console.log("\nMais consumidos pelas Mulheres: ");
        topFeminino.forEach(function (servico) {
            console.log("---------------------------------------------");
            console.log("Nome do servico : ".concat(servico.getNome));
            console.log("Descri\u00E7\u00E3o : ".concat(servico.getDescricao));
            console.log("Pre\u00E7o : ".concat(servico.getPreco));
            console.log("Quantidade consumida : ".concat(servico.getConsumoFeminino));
        });
        console.log("");
    };
    return ListagemServicos;
}(listagem_1.default));
exports.default = ListagemServicos;
