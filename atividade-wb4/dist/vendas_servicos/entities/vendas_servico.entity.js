"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasServico = void 0;
const cliente_entity_1 = require("../../cliente/entities/cliente.entity");
const servico_entity_1 = require("../../servico/entities/servico.entity");
const typeorm_1 = require("typeorm");
let VendasServico = class VendasServico {
};
exports.VendasServico = VendasServico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VendasServico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendasServico.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VendasServico.prototype, "valor_total", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.ClienteEntity, (cliente) => cliente.servicos_consumidos),
    __metadata("design:type", cliente_entity_1.ClienteEntity)
], VendasServico.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servico_entity_1.ServicoEntity, (servico) => servico.servico_vendas),
    __metadata("design:type", servico_entity_1.ServicoEntity)
], VendasServico.prototype, "servico", void 0);
exports.VendasServico = VendasServico = __decorate([
    (0, typeorm_1.Entity)({ name: 'vendas_servicos' })
], VendasServico);
//# sourceMappingURL=vendas_servico.entity.js.map