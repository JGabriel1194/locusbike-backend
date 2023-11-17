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
exports.CreateBikeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBikeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Serie',
        example: '123456789',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeSerie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Marca',
        example: 'Trek',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeBrand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Modelo',
        example: 'Madone',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tamaño',
        example: 'M',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Color',
        example: 'Rojo',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bileColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Año',
        example: '2020',
    }),
    __metadata("design:type", Date)
], CreateBikeDto.prototype, "bikeYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Material de la bicicleta',
        example: 'Carbono',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeMaterial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de frenos',
        example: 'Ruta',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeBrake", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Marca de frenos',
        example: 'Shimano',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeBrakeBrand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de manubrio',
        example: 'Ruta',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeHandlebar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Potencia o soprte',
        example: 'Trek',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikePotency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de transmisión',
        example: 'Shimano dura-ace',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeTransmission", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de pedales',
        example: 'Shimano',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikePedal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de asiento',
        example: 'Fizi',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeSeat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de rines',
        example: 'Campagnolo',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeRing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Tipo de llantas',
        example: 'Michelin',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeTire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'Estado de la bicicleta',
        example: 'Excelente',
    }),
    __metadata("design:type", String)
], CreateBikeDto.prototype, "bikeState", void 0);
exports.CreateBikeDto = CreateBikeDto;
//# sourceMappingURL=create-bike.dto.js.map