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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        _this.rgs = [];
        _this.telefones = [];
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        var isTrue = true;
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        isTrue = true;
        while (isTrue) {
            var ddd = this.entrada.receberTexto("Por favor informe o DDD do su telefone: ");
            var numero = this.entrada.receberTexto("Por favor informe o numero do seu telefone: ");
            var telefone = new telefone_1.default(ddd, numero);
            this.telefones.push(telefone);
            var resp = this.entrada.receberTexto("Deseja cadastrar mais um telefone ? 1) N\u00E3o 2)Sim ");
            if (resp == '2') {
                isTrue = true;
            }
            else {
                isTrue = false;
            }
        }
        console.log('1) Masculino 2) Feminino 3) Outro  ');
        var entradaGenero = this.entrada.receberNumero('Por favor informe com qual gênero você se identifica: ');
        var genero = "Outro";
        switch (entradaGenero) {
            case 1:
                genero = "Masculino";
                break;
            case 2:
                genero = "Feminino";
                break;
            default:
                genero = "Outro";
                break;
        }
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero, this.rgs, this.telefones);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
