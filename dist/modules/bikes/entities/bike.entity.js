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
exports.Bike = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Bike = class Bike extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeSerie", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeBrand", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeModel", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeSize", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bileColor", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Bike.prototype, "bikeYear", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeMaterial", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeBrake", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeBrakeBrand", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeHandlebar", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikePotency", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeTransmission", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikePedal", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeSeat", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeRing", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeTire", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bike.prototype, "bikeState", void 0);
Bike = __decorate([
    sequelize_typescript_1.Table
], Bike);
exports.Bike = Bike;
//# sourceMappingURL=bike.entity.js.map