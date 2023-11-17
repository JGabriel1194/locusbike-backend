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
exports.PedalsController = void 0;
const common_1 = require("@nestjs/common");
const pedals_service_1 = require("./pedals.service");
const create_pedal_dto_1 = require("./dto/create-pedal.dto");
const update_pedal_dto_1 = require("./dto/update-pedal.dto");
const swagger_1 = require("@nestjs/swagger");
let PedalsController = class PedalsController {
    constructor(pedalsService) {
        this.pedalsService = pedalsService;
    }
    create(createPedalDto) {
        return this.pedalsService.create(createPedalDto);
    }
    findAll() {
        return this.pedalsService.findAll();
    }
    findOne(id) {
        return this.pedalsService.findOne(+id);
    }
    update(id, updatePedalDto) {
        return this.pedalsService.update(+id, updatePedalDto);
    }
    remove(id) {
        return this.pedalsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedal_dto_1.CreatePedalDto]),
    __metadata("design:returntype", void 0)
], PedalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PedalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PedalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pedal_dto_1.UpdatePedalDto]),
    __metadata("design:returntype", void 0)
], PedalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PedalsController.prototype, "remove", null);
PedalsController = __decorate([
    (0, swagger_1.ApiTags)('pedals'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('pedals'),
    __metadata("design:paramtypes", [pedals_service_1.PedalsService])
], PedalsController);
exports.PedalsController = PedalsController;
//# sourceMappingURL=pedals.controller.js.map