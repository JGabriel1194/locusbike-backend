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
exports.BrakesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const brake_entity_1 = require("./entities/brake.entity");
const customResponses_1 = require("../../helpers/customResponses");
let BrakesService = class BrakesService {
    constructor(brakeModel) {
        this.brakeModel = brakeModel;
    }
    async create(res, createBrakeDto) {
        try {
            const newBrake = await this.brakeModel.create(createBrakeDto);
            return (0, customResponses_1.customResponse)(true, res, 201, 'Frenos creados', newBrake);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findAll(res) {
        try {
            const allBrakes = await this.brakeModel.findAll();
            if (allBrakes.length > 0) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Frenos encontrados', allBrakes);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'No se encontraron frenos', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findOne(res, id) {
        try {
            const brake = await this.brakeModel.findByPk(id);
            if (brake) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Freno encontrado', brake);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Freno no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async update(res, id, updateBrakeDto) {
        try {
            const brake = await this.brakeModel.findByPk(id);
            if (brake) {
                await brake.update(updateBrakeDto);
                return (0, customResponses_1.customResponse)(true, res, 200, 'Freno actualizado', brake);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Freno no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    remove(res, id) {
        return `This action removes a #${id} brake`;
    }
};
BrakesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(brake_entity_1.Brake)),
    __metadata("design:paramtypes", [Object])
], BrakesService);
exports.BrakesService = BrakesService;
//# sourceMappingURL=brakes.service.js.map