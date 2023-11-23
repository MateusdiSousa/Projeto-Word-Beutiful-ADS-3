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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasServicosController = void 0;
const common_1 = require("@nestjs/common");
const vendas_servicos_service_1 = require("./vendas_servicos.service");
const create_vendas_servico_dto_1 = require("./dto/create-vendas_servico.dto");
const update_vendas_servico_dto_1 = require("./dto/update-vendas_servico.dto");
let VendasServicosController = class VendasServicosController {
    constructor(vendasServicosService) {
        this.vendasServicosService = vendasServicosService;
    }
    create(createVendasServicoDto) {
        return this.vendasServicosService.create(createVendasServicoDto);
    }
    findAll() {
        return this.vendasServicosService.findAll();
    }
    findOne(id) {
        return this.vendasServicosService.findOne(+id);
    }
    update(id, updateVendasServicoDto) {
        return this.vendasServicosService.update(+id, updateVendasServicoDto);
    }
    remove(id) {
        return this.vendasServicosService.remove(+id);
    }
};
exports.VendasServicosController = VendasServicosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vendas_servico_dto_1.CreateVendasServicoDto]),
    __metadata("design:returntype", void 0)
], VendasServicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendasServicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendasServicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vendas_servico_dto_1.UpdateVendasServicoDto]),
    __metadata("design:returntype", void 0)
], VendasServicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendasServicosController.prototype, "remove", null);
exports.VendasServicosController = VendasServicosController = __decorate([
    (0, common_1.Controller)('vendas-servicos'),
    __metadata("design:paramtypes", [vendas_servicos_service_1.VendasServicosService])
], VendasServicosController);
//# sourceMappingURL=vendas_servicos.controller.js.map