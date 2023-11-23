"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasProdutosService = void 0;
const common_1 = require("@nestjs/common");
let VendasProdutosService = class VendasProdutosService {
    create(createVendasProdutoDto) {
        return 'This action adds a new vendasProduto';
    }
    findAll() {
        return `This action returns all vendasProdutos`;
    }
    findOne(id) {
        return `This action returns a #${id} vendasProduto`;
    }
    update(id, updateVendasProdutoDto) {
        return `This action updates a #${id} vendasProduto`;
    }
    remove(id) {
        return `This action removes a #${id} vendasProduto`;
    }
};
exports.VendasProdutosService = VendasProdutosService;
exports.VendasProdutosService = VendasProdutosService = __decorate([
    (0, common_1.Injectable)()
], VendasProdutosService);
//# sourceMappingURL=vendas_produtos.service.js.map