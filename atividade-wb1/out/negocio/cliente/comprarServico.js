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
var comprar_1 = __importDefault(require("../comprar"));
var ComprarServico = /** @class */ (function (_super) {
    __extends(ComprarServico, _super);
    function ComprarServico(servicos) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default();
        _this.servicos = servicos;
        return _this;
    }
    ComprarServico.prototype.selecionarCliente = function (clientes) {
        console.log("Selecione o cliente que realizará a compra");
        console.log("-------------------------------------------");
        clientes.forEach(function (cliente) {
            console.log("".concat(clientes.indexOf(cliente) + 1, " - nome : ").concat(cliente.nome));
        });
        var indexCliente = this.entrada.receberNumero('Digite o numero do cliente que realizará a compra: ') - 1;
        this.cliente = clientes[indexCliente];
    };
    ComprarServico.prototype.comprar = function () {
        var _this = this;
        console.log("Selecione os serviços que deseja comprar:");
        console.log("------------------------------------------");
        this.servicos.forEach(function (servico) {
            console.log("".concat(_this.servicos.indexOf(servico) + 1, " - nome : ").concat(servico.getNome, " , pre\u00E7o : ").concat(servico.getPreco));
        });
        var finalizado = 1;
        while (finalizado == 1) {
            var indexServico = this.entrada.receberNumero("Digite o numero do servico que deseja comprar: ") - 1;
            var servicoRef = this.servicos[indexServico];
            var quantidade = this.entrada.receberNumero("Quantos ".concat(servicoRef.getNome, " ser\u00E3o prestados: "));
            var valorCompra = quantidade * servicoRef.getPreco;
            this.cliente.setQuantidadeServicos = quantidade;
            this.cliente.setTotalGastoServico = valorCompra;
            this.cliente.setTotalGasto = valorCompra;
            servicoRef.setConsumoTotal = quantidade;
            servicoRef.setTotalVendas = valorCompra;
            if (this.cliente.genero == 'Masculino') {
                servicoRef.setConsumoMasculino = quantidade;
            }
            else if (this.cliente.genero == 'Feminino') {
                servicoRef.setConsumoFeminino = quantidade;
            }
            var nomeFiltro = servicoRef.getNome;
            var descFiltro = servicoRef.getDescricao;
            var objEncontrado = void 0;
            for (var _i = 0, _a = this.cliente.getServicosConsumidos; _i < _a.length; _i++) {
                var servico = _a[_i];
                if (servico.descricao === descFiltro && servico.nome === nomeFiltro) {
                    objEncontrado = servico;
                }
            }
            if (objEncontrado) {
                objEncontrado.setTotalVendas = valorCompra;
                objEncontrado.setConsumoTotal = quantidade;
                this.cliente.setQuantidadeServicos = quantidade;
            }
            else {
                var servico = new servico_1.default(servicoRef.getNome, servicoRef.getDescricao, servicoRef.getPreco);
                servico.setTotalVendas = valorCompra;
                servico.consumoTotal = quantidade;
                this.cliente.setQuantidadeServicos = quantidade;
                this.cliente.setServicosConsumidos = servico;
            }
            finalizado = this.entrada.receberNumero("Deseja contratar mais um serviço? (1 : sim , 0 : não): ");
        }
    };
    return ComprarServico;
}(comprar_1.default));
exports.default = ComprarServico;
