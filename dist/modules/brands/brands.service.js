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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const brand_entity_1 = require("./entities/brand.entity");
const sequelize_2 = require("sequelize");
const customResponses_1 = require("../../helpers/customResponses");
let BrandsService = class BrandsService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async create(res, createBrandDto) {
        try {
            const existBrand = await this.brandModel.findOne({
                where: {
                    [sequelize_2.Op.or]: [
                        { brandName: createBrandDto.brandName }
                    ],
                },
            });
            if (existBrand) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'Marca ya registrada', null);
            }
            const newBrand = await this.brandModel.create(createBrandDto);
            return (0, customResponses_1.customResponse)(true, res, 201, 'Marca creada', newBrand);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findAll(res) {
        try {
            const allBrands = await this.brandModel.findAll();
            if (allBrands.length > 0) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Marcas encontradas', allBrands);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'No se encontraron marcas', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findOne(res, id) {
        try {
            const brand = await this.brandModel.findByPk(id);
            if (brand) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Marca encontrada', brand);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Marca no encontrada', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async update(res, id, updateBrandDto) {
        try {
            const brand = await this.brandModel.findByPk(id);
            if (brand) {
                await brand.update(updateBrandDto);
                return (0, customResponses_1.customResponse)(true, res, 200, 'Marca actualizada', brand);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Marca no encontrada', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    remove(id) {
        return `This action removes a #${id} brand`;
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [Object])
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map