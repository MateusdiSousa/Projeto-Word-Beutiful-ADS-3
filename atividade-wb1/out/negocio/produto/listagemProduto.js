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
var ListagemProdutos = /** @class */ (function (_super) {
    __extends(ListagemProdutos, _super);
    function ListagemProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ListagemProdutos.prototype.listar = function () {
        console.log('\nComo deseja listar os produtos?');
        console.log('1 - Listar todos os produtos');
        console.log('2 - Listar 5 produtos mais prestados');
        console.log('3 - Listar os produtos mais prestados');
        console.log('4 - Listar os produtos mais prestados por gênero');
        var opcao = this.entrada.receberNumero('\nSelecione o método de listagem');
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
    ListagemProdutos.prototype.listarTodos = function () {
        console.log("\n Lista de todos os produtos:");
        this.produtos.forEach(function (produto) {
            console.log("Nome: " + produto.getNome);
            console.log("Descri\u00E7\u00E3o: " + produto.getDescricao);
            console.log("Pre\u00E7o do produto: " + produto.getPreco);
            console.log("==================================================");
        });
        console.log("\n");
    };
    ListagemProdutos.prototype.listarTop5 = function () {
        console.log("5 produtos Mais Prestados:");
        var produtosOrdenados = this.produtos.slice().sort(function (a, b) { return b.consumoTotal - a.consumoTotal; });
        var top5 = produtosOrdenados.slice(0, 5);
        top5.forEach(function (produto) {
            console.log("Nome: ".concat(produto.getNome));
            console.log("Descri\u00E7\u00E3o: ".concat(produto.getDescricao));
            console.log("Pre\u00E7o: ".concat(produto.getPreco));
            console.log("Total de vendas : ".concat(produto.getTotalVendas));
        });
        console.log("");
    };
    ListagemProdutos.prototype.listarMaisConsumidos = function () {
        console.log("produtos Mais Prestados:");
        var produtosOrdenados = this.produtos.slice().sort(function (a, b) { return b.consumoTotal - a.consumoTotal; });
        console.log("--------------------------------------------------------");
        produtosOrdenados.forEach(function (produto) {
            console.log("Nome: ".concat(produto.getNome));
            console.log("Descri\u00E7\u00E3o: ".concat(produto.getDescricao));
            console.log("Pre\u00E7o: ".concat(produto.getPreco));
            console.log("Total de vendas : ".concat(produto.getTotalVendas));
            console.log("----------------------------------------------------");
        });
        console.log("");
    };
    ListagemProdutos.prototype.listarPorGenero = function () {
        console.log("produtos mais consumidos por gen\u00EAnero:");
        var topMasculino = this.produtos.slice().sort(function (a, b) { return b.consumoFeminino - a.consumoFeminino; });
        console.log("Mais consumidos pelos homens: ");
        topMasculino.forEach(function (produto) {
            console.log("---------------------------------------------");
            console.log("Nome do produto : ".concat(produto.getNome));
            console.log("Descri\u00E7\u00E3o : ".concat(produto.getDescricao));
            console.log("Pre\u00E7o : ".concat(produto.getPreco));
            console.log("Quantidade consumida : ".concat(produto.getConsumoMasculino));
        });
        console.log("");
        var topFeminino = this.produtos.slice().sort(function (a, b) { return b.consumoFeminino - a.consumoFeminino; });
        console.log("Mais consumidos pelas Mulheres: ");
        topFeminino.forEach(function (produto) {
            console.log("---------------------------------------------");
            console.log("Nome do produto : ".concat(produto.getNome));
            console.log("Descri\u00E7\u00E3o : ".concat(produto.getDescricao));
            console.log("Pre\u00E7o : ".concat(produto.getPreco));
            console.log("Quantidade consumida : ".concat(produto.getConsumoFeminino));
            console.log("");
        });
    };
    return ListagemProdutos;
}(listagem_1.default));
exports.default = ListagemProdutos;
