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
exports.BrakesController = void 0;
const common_1 = require("@nestjs/common");
const brakes_service_1 = require("./brakes.service");
const create_brake_dto_1 = require("./dto/create-brake.dto");
const update_brake_dto_1 = require("./dto/update-brake.dto");
const swagger_1 = require("@nestjs/swagger");
let BrakesController = class BrakesController {
    constructor(brakesService) {
        this.brakesService = brakesService;
    }
    create(res, createBrakeDto) {
        return this.brakesService.create(res, createBrakeDto);
    }
    findAll(res) {
        return this.brakesService.findAll(res);
    }
    findOne(res, id) {
        return this.brakesService.findOne(res, +id);
    }
    update(res, id, updateBrakeDto) {
        return this.brakesService.update(res, +id, updateBrakeDto);
    }
    remove(res, id) {
        return this.brakesService.remove(res, +id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_brake_dto_1.CreateBrakeDto]),
    __metadata("design:returntype", void 0)
], BrakesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrakesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BrakesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_brake_dto_1.UpdateBrakeDto]),
    __metadata("design:returntype", void 0)
], BrakesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BrakesController.prototype, "remove", null);
BrakesController = __decorate([
    (0, swagger_1.ApiTags)('brakes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('brakes'),
    __metadata("design:paramtypes", [brakes_service_1.BrakesService])
], BrakesController);
exports.BrakesController = BrakesController;
//# sourceMappingURL=brakes.controller.js.map