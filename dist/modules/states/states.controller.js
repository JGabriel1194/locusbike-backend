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
exports.StatesController = void 0;
const common_1 = require("@nestjs/common");
const states_service_1 = require("./states.service");
const create_state_dto_1 = require("./dto/create-state.dto");
const update_state_dto_1 = require("./dto/update-state.dto");
const swagger_1 = require("@nestjs/swagger");
let StatesController = class StatesController {
    constructor(statesService) {
        this.statesService = statesService;
    }
    create(createStateDto) {
        return this.statesService.create(createStateDto);
    }
    findAll() {
        return this.statesService.findAll();
    }
    findOne(id) {
        return this.statesService.findOne(+id);
    }
    update(id, updateStateDto) {
        return this.statesService.update(+id, updateStateDto);
    }
    remove(id) {
        return this.statesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_state_dto_1.CreateStateDto]),
    __metadata("design:returntype", void 0)
], StatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_state_dto_1.UpdateStateDto]),
    __metadata("design:returntype", void 0)
], StatesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatesController.prototype, "remove", null);
StatesController = __decorate([
    (0, swagger_1.ApiTags)('states'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('states'),
    __metadata("design:paramtypes", [states_service_1.StatesService])
], StatesController);
exports.StatesController = StatesController;
//# sourceMappingURL=states.controller.js.map