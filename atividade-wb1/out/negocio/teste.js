"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teste = void 0;
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var produto_1 = __importDefault(require("../modelo/produto"));
var servico_1 = __importDefault(require("../modelo/servico"));
var Teste = /** @class */ (function () {
    function Teste(servicos, produtos, clientes) {
        this.servicos = servicos;
        this.produtos = produtos;
        this.clientes = clientes;
    }
    Teste.prototype.ContruirAmbiente = function () {
        // Clientes 
        this.clientes.push(new cliente_1.default('Angelina', 'Ziraldo', new cpf_1.default('87233765626', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Bernardo', 'Yago', new cpf_1.default('66158113247', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Cecilia', 'Xerxes', new cpf_1.default('77513597901', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Daniel', 'Wilda', new cpf_1.default('52179724918', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Diana', 'Wilson', new cpf_1.default('12154974155', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Eric', 'Vitoria', new cpf_1.default('77753398024', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Fabiola', 'Ulisses', new cpf_1.default('33203424010', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Gabriel', 'Talita', new cpf_1.default('23572520061', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Helena', 'Theo', new cpf_1.default('81161508040', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Icaro', 'Samanta', new cpf_1.default('82191377033', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Juliana', 'Romulo', new cpf_1.default('52376507081', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Jean', 'Queila', new cpf_1.default('11836899009', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Karen', 'Pedro', new cpf_1.default('33851696077', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Luis', 'Olivia', new cpf_1.default('20294030085', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Monique', 'Nelson', new cpf_1.default('39387663019', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Natanael', 'Miriam', new cpf_1.default('01671415035', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Nicole', 'Leonardo', new cpf_1.default('28641837060', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Orlando', 'Kimberly', new cpf_1.default('26494158005', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Patricia', 'Joao', new cpf_1.default('96200240019', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Pietro', 'Isis', new cpf_1.default('66847450096', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Quenia', 'Henrique', new cpf_1.default('10970330073', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Ricardo', 'Gilda', new cpf_1.default('77607516050', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Sofia', 'Gustavo', new cpf_1.default('17064086093', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Thales', 'Fernanda', new cpf_1.default('17325679050', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Ursula', 'Enzo', new cpf_1.default('22586438051', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Vicente', 'Dalila', new cpf_1.default('29971566028', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Walesca', 'Cicero', new cpf_1.default('67342794058', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Xavier', 'Catarina', new cpf_1.default('78111707010', new Date()), 'Masculino', [], []));
        this.clientes.push(new cliente_1.default('Yara', 'Bruno', new cpf_1.default('91882130057', new Date()), 'Feminino', [], []));
        this.clientes.push(new cliente_1.default('Zacarias', 'Aline', new cpf_1.default('12448918007', new Date()), 'Masculino', [], []));
        //Produtos
        this.produtos.push(new produto_1.default('Esmalte Lilas', '', 5));
        this.produtos.push(new produto_1.default('Shampoo', '', 4));
        this.produtos.push(new produto_1.default('Condicionador', '', 6));
        this.produtos.push(new produto_1.default('Creme Hidratante', '', 15));
        this.produtos.push(new produto_1.default('Escova', '', 17));
        this.produtos.push(new produto_1.default('Pasta de Dente', '', 20));
        this.produtos.push(new produto_1.default('Fio Dental', '', 10));
        this.produtos.push(new produto_1.default('Agua Sanitaria', '', 13));
        this.produtos.push(new produto_1.default('Tinta para Cabelos', '', 1));
        this.produtos.push(new produto_1.default('Pente', '', 5));
        this.produtos.push(new produto_1.default('Tesoura', '', 20));
        this.produtos.push(new produto_1.default('Caderno', '', 7));
        this.produtos.push(new produto_1.default('Bolacha', '', 80));
        this.produtos.push(new produto_1.default('Caneta', '', 35));
        this.produtos.push(new produto_1.default('Lapis', '', 15));
        this.produtos.push(new produto_1.default('Borracha', '', 2));
        this.produtos.push(new produto_1.default('Cafe', '', 3));
        this.produtos.push(new produto_1.default('Leite Vegetal', '', 3));
        this.produtos.push(new produto_1.default('Fruta', '', 25));
        this.produtos.push(new produto_1.default('Kombucha', '', 5));
        //Serviços
        this.servicos.push(new servico_1.default('Lavar Roupa', '', 30));
        this.servicos.push(new servico_1.default('Passar Roupa', '', 40));
        this.servicos.push(new servico_1.default('Manicure', '', 30));
        this.servicos.push(new servico_1.default('Pedicure', '', 40));
        this.servicos.push(new servico_1.default('Massagem', '', 100));
        this.servicos.push(new servico_1.default('Depilação', '', 45));
        this.servicos.push(new servico_1.default('Cortar Cabelo', '', 25));
        console.log("");
    };
    return Teste;
}());
exports.Teste = Teste;
