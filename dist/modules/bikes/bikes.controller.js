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
exports.BikesController = void 0;
const common_1 = require("@nestjs/common");
const bikes_service_1 = require("./bikes.service");
const create_bike_dto_1 = require("./dto/create-bike.dto");
const update_bike_dto_1 = require("./dto/update-bike.dto");
const swagger_1 = require("@nestjs/swagger");
let BikesController = class BikesController {
    constructor(bikesService) {
        this.bikesService = bikesService;
    }
    create(res, createBikeDto) {
        return this.bikesService.create(res, createBikeDto);
    }
    findAll(res) {
        return this.bikesService.findAll(res);
    }
    findOne(res, id) {
        return this.bikesService.findOne(res, +id);
    }
    update(res, id, updateBikeDto) {
        return this.bikesService.update(res, +id, updateBikeDto);
    }
    remove(res, id) {
        return this.bikesService.remove(res, +id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_bike_dto_1.CreateBikeDto]),
    __metadata("design:returntype", void 0)
], BikesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BikesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BikesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_bike_dto_1.UpdateBikeDto]),
    __metadata("design:returntype", void 0)
], BikesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BikesController.prototype, "remove", null);
BikesController = __decorate([
    (0, swagger_1.ApiTags)('bikes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('bikes'),
    __metadata("design:paramtypes", [bikes_service_1.BikesService])
], BikesController);
exports.BikesController = BikesController;
//# sourceMappingURL=bikes.controller.js.map