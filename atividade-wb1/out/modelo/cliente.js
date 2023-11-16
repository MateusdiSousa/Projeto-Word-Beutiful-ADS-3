"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.genero = genero;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.totalGasto = 0;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = new Array;
        this.quantidadeProdutosConsumidos = 0;
        this.servicosConsumidos = new Array;
        this.quantidadeServicosConsumidos = 0;
        this.totalGastoProduto = 0;
        this.totalGastoServico = 0;
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalGasto", {
        get: function () {
            return parseFloat(this.totalGasto.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getQuantidadeServicos", {
        get: function () {
            return this.quantidadeServicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getQuantidadeProdutos", {
        get: function () {
            return this.quantidadeProdutosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalGastoProduto", {
        get: function () {
            return parseFloat(this.totalGastoProduto.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalGastoServico", {
        get: function () {
            return parseFloat(this.totalGastoServico.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTotalGasto", {
        set: function (valor) {
            this.totalGasto += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setQuantidadeProdutos", {
        set: function (valor) {
            this.quantidadeProdutosConsumidos += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setQuantidadeServicos", {
        set: function (valor) {
            this.quantidadeServicosConsumidos += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTotalGastoProduto", {
        set: function (valor) {
            this.totalGastoProduto += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTotalGastoServico", {
        set: function (valor) {
            this.totalGastoServico += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setProdutosConsumidos", {
        set: function (produto) {
            this.produtosConsumidos.push(produto);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setServicosConsumidos", {
        set: function (servico) {
            this.servicosConsumidos.push(servico);
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
