"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    Object.defineProperty(Empresa.prototype, "getClientes", {
        get: function () {
            return this.clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getProdutos", {
        get: function () {
            return this.produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getServicos", {
        get: function () {
            return this.servicos;
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.deleteCliente = function (clienteD) {
        this.clientes = this.clientes.filter(function (item) { return item !== clienteD; });
    };
    Empresa.prototype.deleteServico = function (servicoD) {
        this.servicos = this.servicos.filter(function (item) { return item !== servicoD; });
    };
    Empresa.prototype.deleteProduto = function (produtoD) {
        this.produtos = this.produtos.filter(function (item) { return item !== produtoD; });
    };
    return Empresa;
}());
exports.default = Empresa;
