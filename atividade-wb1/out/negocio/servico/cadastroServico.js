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
var servico_1 = __importDefault(require("../../modelo/servico"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(servicos) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default;
        _this.servicos = servicos;
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        console.log("\n In\u00EDcio do cadastro de servi\u00E7o");
        var nome = this.entrada.receberTexto("Por favor informe o nome do servi\u00E7o: ");
        var desc = this.entrada.receberTexto("Por favor informe a descri\u00E7\u00E3o breve do servi\u00E7o: ");
        var preco = this.entrada.receberNumero("Por favor informe o pre\u00E7o do servi\u00E7o: ");
        var servico = new servico_1.default(nome, desc, preco);
        this.servicos.push(servico);
        console.log("\n Cadastro de Servi\u00E7o conclu\u00EDdo :)");
    };
    return CadastroServico;
}(cadastro_1.default));
exports.default = CadastroServico;
