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
exports.ModelsService = void 0;
const common_1 = require("@nestjs/common");
const model_entity_1 = require("./entities/model.entity");
const sequelize_1 = require("@nestjs/sequelize");
const customResponses_1 = require("../../helpers/customResponses");
const sequelize_2 = require("sequelize");
let ModelsService = class ModelsService {
    constructor(modelModel) {
        this.modelModel = modelModel;
    }
    async create(res, createModelDto) {
        try {
            const existModel = await this.modelModel.findOne({
                where: {
                    modelName: createModelDto.modelName,
                },
            });
            if (existModel) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'Modelo ya registrado', null);
            }
            const newModel = await this.modelModel.create(createModelDto);
            return (0, customResponses_1.customResponse)(true, res, 201, 'Modelo creado', newModel);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findAll(res) {
        try {
            const allModels = await this.modelModel.findAll();
            if (allModels.length > 0) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Modelos encontrados', allModels);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'No se encontraron modelos', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findOne(res, id) {
        try {
            const model = await this.modelModel.findOne({
                where: {
                    id,
                },
            });
            if (model) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Modelo encontrado', model);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Modelo no encontrado', null);
        }
        catch (error) {
        }
    }
    async update(res, id, updateModelDto) {
        try {
            const model = await this.modelModel.findOne({
                where: {
                    id,
                },
            });
            if (model) {
                const updatedModel = await this.modelModel.update(updateModelDto, {
                    where: {
                        id,
                    },
                });
                return (0, customResponses_1.customResponse)(true, res, 200, 'Modelo actualizado', updatedModel);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Modelo no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async remove(res, id) {
        try {
            const model = await this.modelModel.findOne({
                where: {
                    id,
                },
            });
            if (model) {
                await model.destroy();
                return (0, customResponses_1.customResponse)(true, res, 200, 'Modelo eliminado', null);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Modelo no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findByModelName(res, modelName) {
        console.log('modelName', modelName);
        try {
            const model = await this.modelModel.findAll({
                where: {
                    modelName: {
                        [sequelize_2.Op.like]: `%${modelName}%`,
                    },
                },
            });
            if (model) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Modelo encontrado', model);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Modelo no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
};
ModelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(model_entity_1.Modelo)),
    __metadata("design:paramtypes", [Object])
], ModelsService);
exports.ModelsService = ModelsService;
//# sourceMappingURL=models.service.js.map