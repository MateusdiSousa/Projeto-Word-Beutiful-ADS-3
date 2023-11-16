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
exports.ServicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const servico_entity_1 = require("./entities/servico.entity");
const typeorm_2 = require("typeorm");
let ServicoService = class ServicoService {
    constructor(servicoRepository) {
        this.servicoRepository = servicoRepository;
    }
    async create(servicoDto) {
        const newServico = new servico_entity_1.ServicoEntity();
        newServico.nome = servicoDto.nome;
        newServico.descricao = servicoDto.desc;
        newServico.preco = servicoDto.preco;
        newServico.quantidadeVendas = 0;
        newServico.quantidade_vendas_feminino = 0;
        newServico.quantidade_vendas_masculino = 0;
        newServico.valorVendas = 0;
        return await this.servicoRepository.save(newServico);
    }
    findAll() {
        return this.servicoRepository.find();
    }
    findOne(id) {
        return this.servicoRepository.findBy({ id: id });
    }
    remove(id) {
        return this.servicoRepository.delete(id);
    }
};
exports.ServicoService = ServicoService;
exports.ServicoService = ServicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(servico_entity_1.ServicoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServicoService);
//# sourceMappingURL=servico.service.js.map