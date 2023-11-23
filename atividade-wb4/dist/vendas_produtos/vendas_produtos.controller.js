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
exports.VendasProdutosController = void 0;
const common_1 = require("@nestjs/common");
const vendas_produtos_service_1 = require("./vendas_produtos.service");
const create_vendas_produto_dto_1 = require("./dto/create-vendas_produto.dto");
const update_vendas_produto_dto_1 = require("./dto/update-vendas_produto.dto");
let VendasProdutosController = class VendasProdutosController {
    constructor(vendasProdutosService) {
        this.vendasProdutosService = vendasProdutosService;
    }
    create(createVendasProdutoDto) {
        return this.vendasProdutosService.create(createVendasProdutoDto);
    }
    findAll() {
        return this.vendasProdutosService.findAll();
    }
    findOne(id) {
        return this.vendasProdutosService.findOne(+id);
    }
    update(id, updateVendasProdutoDto) {
        return this.vendasProdutosService.update(+id, updateVendasProdutoDto);
    }
    remove(id) {
        return this.vendasProdutosService.remove(+id);
    }
};
exports.VendasProdutosController = VendasProdutosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vendas_produto_dto_1.CreateVendasProdutoDto]),
    __metadata("design:returntype", void 0)
], VendasProdutosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendasProdutosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendasProdutosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vendas_produto_dto_1.UpdateVendasProdutoDto]),
    __metadata("design:returntype", void 0)
], VendasProdutosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendasProdutosController.prototype, "remove", null);
exports.VendasProdutosController = VendasProdutosController = __decorate([
    (0, common_1.Controller)('vendas-produtos'),
    __metadata("design:paramtypes", [vendas_produtos_service_1.VendasProdutosService])
], VendasProdutosController);
//# sourceMappingURL=vendas_produtos.controller.js.map