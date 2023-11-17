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
exports.RegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User name',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'El nombre es obligatorio',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User email',
        example: 'john@gmail.com',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'El email es obligatorio',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "userEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User password',
        example: '123456789',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'La contraseña es obligatoria',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "userPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User cedula',
        example: '0123456789',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'La cédula es obligatoria',
    }),
    (0, class_validator_1.MinLength)(10, {
        message: 'La cédula debe tener 10 dígitos',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "userCedula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User phone',
        example: '0123456789',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'El teléfono es obligatorio',
    }),
    (0, class_validator_1.MinLength)(10, {
        message: 'El teléfono debe tener 10 dígitos',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "userPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User image',
        example: 'https://www.google.com',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "userImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'User addres',
        example: 'Calle 123',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "userAddres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'boolean',
        description: 'User status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], RegisterDto.prototype, "isActive", void 0);
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=register.dto.js.map