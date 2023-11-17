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
exports.HandlebarsController = void 0;
const common_1 = require("@nestjs/common");
const handlebars_service_1 = require("./handlebars.service");
const create_handlebar_dto_1 = require("./dto/create-handlebar.dto");
const update_handlebar_dto_1 = require("./dto/update-handlebar.dto");
const swagger_1 = require("@nestjs/swagger");
let HandlebarsController = class HandlebarsController {
    constructor(handlebarsService) {
        this.handlebarsService = handlebarsService;
    }
    create(createHandlebarDto) {
        return this.handlebarsService.create(createHandlebarDto);
    }
    findAll() {
        return this.handlebarsService.findAll();
    }
    findOne(id) {
        return this.handlebarsService.findOne(+id);
    }
    update(id, updateHandlebarDto) {
        return this.handlebarsService.update(+id, updateHandlebarDto);
    }
    remove(id) {
        return this.handlebarsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_handlebar_dto_1.CreateHandlebarDto]),
    __metadata("design:returntype", void 0)
], HandlebarsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HandlebarsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HandlebarsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_handlebar_dto_1.UpdateHandlebarDto]),
    __metadata("design:returntype", void 0)
], HandlebarsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HandlebarsController.prototype, "remove", null);
HandlebarsController = __decorate([
    (0, swagger_1.ApiTags)('handlebars'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('handlebars'),
    __metadata("design:paramtypes", [handlebars_service_1.HandlebarsService])
], HandlebarsController);
exports.HandlebarsController = HandlebarsController;
//# sourceMappingURL=handlebars.controller.js.map