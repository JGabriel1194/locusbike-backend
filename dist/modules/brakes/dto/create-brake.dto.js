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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBrakeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBrakeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Brake name',
        example: 'Calipers',
    }),
    __metadata("design:type", String)
], CreateBrakeDto.prototype, "brakeTipe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Brake brand',
        example: 'Shimano',
    }),
    __metadata("design:type", String)
], CreateBrakeDto.prototype, "brakeBrand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Brake image',
        example: 'https://www.shimano.com/content/dam/global/cycle-sports/en/global/corporate/_img/series/brake/br-r9100/br-r9100_2.jpg',
    }),
    __metadata("design:type", String)
], CreateBrakeDto.prototype, "brakeImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Brake detail',
        example: 'Shimano Dura-Ace BR-R9100 Rim Brake Calipers',
    }),
    __metadata("design:type", String)
], CreateBrakeDto.prototype, "breakeDetail", void 0);
exports.CreateBrakeDto = CreateBrakeDto;
//# sourceMappingURL=create-brake.dto.js.map