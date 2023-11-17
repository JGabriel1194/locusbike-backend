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
exports.RingsController = void 0;
const common_1 = require("@nestjs/common");
const rings_service_1 = require("./rings.service");
const create_ring_dto_1 = require("./dto/create-ring.dto");
const update_ring_dto_1 = require("./dto/update-ring.dto");
const swagger_1 = require("@nestjs/swagger");
let RingsController = class RingsController {
    constructor(ringsService) {
        this.ringsService = ringsService;
    }
    create(createRingDto) {
        return this.ringsService.create(createRingDto);
    }
    findAll() {
        return this.ringsService.findAll();
    }
    findOne(id) {
        return this.ringsService.findOne(+id);
    }
    update(id, updateRingDto) {
        return this.ringsService.update(+id, updateRingDto);
    }
    remove(id) {
        return this.ringsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ring_dto_1.CreateRingDto]),
    __metadata("design:returntype", void 0)
], RingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ring_dto_1.UpdateRingDto]),
    __metadata("design:returntype", void 0)
], RingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RingsController.prototype, "remove", null);
RingsController = __decorate([
    (0, swagger_1.ApiTags)('rings'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('rings'),
    __metadata("design:paramtypes", [rings_service_1.RingsService])
], RingsController);
exports.RingsController = RingsController;
//# sourceMappingURL=rings.controller.js.map