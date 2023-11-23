"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVendasProdutoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vendas_produto_dto_1 = require("./create-vendas_produto.dto");
class UpdateVendasProdutoDto extends (0, mapped_types_1.PartialType)(create_vendas_produto_dto_1.CreateVendasProdutoDto) {
}
exports.UpdateVendasProdutoDto = UpdateVendasProdutoDto;
//# sourceMappingURL=update-vendas_produto.dto.js.map