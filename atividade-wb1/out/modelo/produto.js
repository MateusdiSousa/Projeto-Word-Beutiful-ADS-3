"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, descricao, preco) {
        this.nome = nome;
        this.preco = parseFloat(preco.toFixed(2));
        this.descricao = descricao;
        this.totalVendas = 0;
        this.consumoFeminino = 0;
        this.consumoMasculino = 0;
        this.consumoTotal = 0;
    }
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getTotalVendas", {
        get: function () {
            return this.totalVendas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumoTotal", {
        get: function () {
            return this.consumoTotal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumoMasculino", {
        get: function () {
            return this.consumoMasculino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumoFeminino", {
        get: function () {
            return this.consumoFeminino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setPreco", {
        set: function (preco) {
            this.preco = parseFloat(preco.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setDescricao", {
        set: function (descricao) {
            this.descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setTotalVendas", {
        set: function (venda) {
            this.totalVendas = this.getTotalVendas + venda;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumoTotal", {
        set: function (quantidade) {
            this.consumoTotal = this.consumoTotal + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumoMasculino", {
        set: function (quantidade) {
            this.consumoMasculino = this.consumoMasculino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumoFeminino", {
        set: function (quantidade) {
            this.consumoFeminino = this.consumoFeminino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;
