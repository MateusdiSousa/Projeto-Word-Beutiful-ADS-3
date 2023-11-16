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
var rg_1 = __importDefault(require("../../modelo/rg"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var valorRg = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var dataRg = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
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
        partesData = dataRg.split('/');
        ano = new Number(partesData[2].valueOf()).valueOf();
        mes = new Number(partesData[1].valueOf()).valueOf();
        dia = new Number(partesData[0].valueOf()).valueOf();
        dataEmissao = new Date(ano, mes, dia);
        var rg = new rg_1.default(valorRg, dataEmissao);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        cliente.getRgs.push(rg);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
