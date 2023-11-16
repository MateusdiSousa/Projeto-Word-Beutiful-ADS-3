"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, descricao, preco) {
        this.nome = nome;
        this.preco = parseFloat(preco.toFixed(2));
        this.descricao = descricao;
        this.totalVendas = 0;
        this.consumoFeminino = 0;
        this.consumoMasculino = 0;
        this.consumoTotal = 0;
    }
    Object.defineProperty(Servico.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getTotalVendas", {
        get: function () {
            return this.totalVendas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumoTotal", {
        get: function () {
            return this.consumoTotal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumoMasculino", {
        get: function () {
            return this.consumoMasculino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumoFeminino", {
        get: function () {
            return this.consumoFeminino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setPreco", {
        set: function (preco) {
            this.preco = parseFloat(preco.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setDescricao", {
        set: function (descricao) {
            this.descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setTotalVendas", {
        set: function (quantidade) {
            this.totalVendas = this.getTotalVendas + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumoTotal", {
        set: function (quantidade) {
            this.consumoTotal = this.consumoTotal + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumoMasculino", {
        set: function (quantidade) {
            this.consumoMasculino = this.consumoMasculino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumoFeminino", {
        set: function (quantidade) {
            this.consumoFeminino = this.consumoFeminino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
