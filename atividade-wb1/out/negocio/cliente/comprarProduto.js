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
var entrada_1 = __importDefault(require("../../io/entrada"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var comprar_1 = __importDefault(require("../comprar"));
var ComprarProduto = /** @class */ (function (_super) {
    __extends(ComprarProduto, _super);
    function ComprarProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default();
        _this.produtos = produtos;
        return _this;
    }
    ComprarProduto.prototype.selecionarCliente = function (clientes) {
        console.log("\nSelecione o cliente que realizará a compra");
        console.log("-------------------------------------------");
        clientes.forEach(function (cliente) {
            console.log("".concat(clientes.indexOf(cliente) + 1, " - nome : ").concat(cliente.nome));
        });
        var indexCliente = this.entrada.receberNumero('Digite o numero do cliente que realizará a compra: ') - 1;
        this.cliente = clientes[indexCliente];
    };
    ComprarProduto.prototype.comprar = function () {
        var _this = this;
        console.log("Selecione os produtos que deseja comprar:");
        console.log("------------------------------------------");
        this.produtos.forEach(function (produto) {
            console.log("".concat(_this.produtos.indexOf(produto) + 1, " - nome : ").concat(produto.getNome, " , pre\u00E7o : ").concat(produto.getPreco));
        });
        var finalizado = 1;
        while (finalizado == 1) {
            var indexProduto = this.entrada.receberNumero("Digite o numero do produto que deseja comprar: ") - 1;
            var produtoRef = this.produtos[indexProduto];
            var quantidade = this.entrada.receberNumero("Quantos ".concat(produtoRef.getNome, " ser\u00E3o comprados: "));
            var valorCompra = quantidade * produtoRef.getPreco;
            this.cliente.setQuantidadeProdutos = quantidade;
            this.cliente.setTotalGastoProduto = valorCompra;
            this.cliente.setTotalGasto = valorCompra;
            produtoRef.setConsumoTotal = quantidade;
            produtoRef.setTotalVendas = quantidade;
            var nomeFiltro = produtoRef.getNome;
            var descFiltro = produtoRef.getDescricao;
            var objEncontrado = void 0;
            for (var _i = 0, _a = this.cliente.getProdutosConsumidos; _i < _a.length; _i++) {
                var produto = _a[_i];
                if (produto.descricao === descFiltro && produto.nome === nomeFiltro) {
                    objEncontrado = produto;
                }
            }
            if (objEncontrado) {
                objEncontrado.setTotalVendas = valorCompra;
                objEncontrado.setConsumoTotal = quantidade;
                this.cliente.setQuantidadeProdutos = quantidade;
            }
            else {
                var produto = new produto_1.default(produtoRef.getNome, produtoRef.getDescricao, produtoRef.getPreco);
                produto.setTotalVendas = valorCompra;
                produto.setConsumoTotal = quantidade;
                console.log("consumo total do produto: " + produto.getConsumoTotal);
                console.log('total de vendas: ' + produto.getTotalVendas);
                this.cliente.setQuantidadeProdutos = quantidade;
                this.cliente.setProdutosConsumidos = produto;
            }
            finalizado = this.entrada.receberNumero("Deseja comprar mais um produto? (1 : sim , 0 : não) : ");
        }
    };
    return ComprarProduto;
}(comprar_1.default));
exports.default = ComprarProduto;
