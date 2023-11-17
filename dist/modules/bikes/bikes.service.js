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
exports.BikesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bike_entity_1 = require("./entities/bike.entity");
const customResponses_1 = require("../../helpers/customResponses");
let BikesService = class BikesService {
    constructor(bikeModel) {
        this.bikeModel = bikeModel;
    }
    async create(res, createBikeDto) {
        try {
            const existBike = await this.bikeModel.findOne({
                where: {
                    bikeSerie: createBikeDto.bikeSerie,
                },
            });
            if (existBike) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'La serie pertenece a otra bicicleta', null);
            }
            const newBike = await this.bikeModel.create(createBikeDto);
            return (0, customResponses_1.customResponse)(true, res, 201, 'Bicicleta creada', newBike);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(error);
        }
    }
    async findAll(res) {
        try {
            const allBikes = await this.bikeModel.findAll();
            if (allBikes.length > 0) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Bicicletas encontradas', allBikes);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'No se encontraron bicicletas', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(error);
        }
    }
    async findOne(res, id) {
        try {
            const bike = await this.bikeModel.findOne({ where: { id: id } });
            if (bike) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Bicicleta encontrada', bike);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Bicicleta no encontrada', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(error);
        }
    }
    async update(res, id, updateBikeDto) {
        try {
            const bike = await this.bikeModel.findOne({ where: { id: id } });
            if (bike) {
                const updateBike = await bike.update(updateBikeDto);
                return (0, customResponses_1.customResponse)(true, res, 200, 'Bicicleta actualizada', updateBike);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Bicicleta no encontrada', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(error);
        }
    }
    async remove(res, id) {
        try {
            const bike = await this.bikeModel.findOne({ where: { id: id } });
            if (bike) {
                bike.destroy();
                return (0, customResponses_1.customResponse)(true, res, 200, 'Bicicleta eliminada', null);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Bicicleta no encontrada', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(error);
        }
    }
};
BikesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(bike_entity_1.Bike)),
    __metadata("design:paramtypes", [Object])
], BikesService);
exports.BikesService = BikesService;
//# sourceMappingURL=bikes.service.js.map