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
exports.ServicoEntity = void 0;
const vendas_servico_entity_1 = require("../../vendas_servicos/entities/vendas_servico.entity");
const typeorm_1 = require("typeorm");
let ServicoEntity = class ServicoEntity {
};
exports.ServicoEntity = ServicoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ServicoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServicoEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServicoEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServicoEntity.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServicoEntity.prototype, "quantidade_vendas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServicoEntity.prototype, "quantidade_vendas_masculino", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServicoEntity.prototype, "quantidade_vendas_feminino", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServicoEntity.prototype, "valor_total_vendas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendas_servico_entity_1.VendasServico, (vendas) => vendas.servico),
    __metadata("design:type", Object)
], ServicoEntity.prototype, "servico_vendas", void 0);
exports.ServicoEntity = ServicoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Servicos' })
], ServicoEntity);
//# sourceMappingURL=servico.entity.js.map