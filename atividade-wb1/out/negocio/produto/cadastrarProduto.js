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
var cadastro_1 = __importDefault(require("../cadastro"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var CadastrarProduto = /** @class */ (function (_super) {
    __extends(CadastrarProduto, _super);
    function CadastrarProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default();
        _this.produtos = produtos;
        return _this;
    }
    CadastrarProduto.prototype.cadastrar = function () {
        console.log("\n In\u00EDcio do cadastro de produto");
        var nome = this.entrada.receberTexto("Por favor informe o nome do Produto: ");
        var desc = this.entrada.receberTexto("Por favor informe a descri\u00E7\u00E3o breve do Produto: ");
        var preco = this.entrada.receberNumero("Por favor informe o pre\u00E7o do Produto: ");
        var produto = new produto_1.default(nome, desc, preco);
        this.produtos.push(produto);
    };
    return CadastrarProduto;
}(cadastro_1.default));
exports.default = CadastrarProduto;
