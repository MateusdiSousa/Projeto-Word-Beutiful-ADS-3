"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoModule = void 0;
const common_1 = require("@nestjs/common");
const servico_service_1 = require("./servico.service");
const servico_controller_1 = require("./servico.controller");
const servico_entity_1 = require("./entities/servico.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ServicoModule = class ServicoModule {
};
exports.ServicoModule = ServicoModule;
exports.ServicoModule = ServicoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([servico_entity_1.ServicoEntity])],
        controllers: [servico_controller_1.ServicoController],
        providers: [servico_service_1.ServicoService],
    })
], ServicoModule);
//# sourceMappingURL=servico.module.js.map