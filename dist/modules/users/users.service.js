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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("./entities/user.entity");
const password_1 = require("../../helpers/password");
const customResponses_1 = require("../../helpers/customResponses");
const sequelize_2 = require("sequelize");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(res, createUserDto) {
        try {
            const existUser = await this.userModel.findOne({
                where: {
                    [sequelize_2.Op.or]: [
                        { userEmail: createUserDto.userEmail },
                        { userCedula: createUserDto.userCedula },
                    ],
                },
            });
            if (existUser) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'Usuario ya registrado', null);
            }
            const password = await (0, password_1.hashPassword)(createUserDto.userPassword);
            createUserDto = Object.assign(Object.assign({}, createUserDto), { userPassword: password });
            const newUser = await this.userModel.create(createUserDto);
            return (0, customResponses_1.customResponse)(true, res, 201, 'Usuario creado', newUser);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findAll(res) {
        try {
            const allUsers = await this.userModel.findAll();
            if (allUsers.length > 0) {
                return (0, customResponses_1.customResponse)(false, res, 200, 'Usuarios encontrados', allUsers);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'No hay usuarios registrados', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findOne(res, id) {
        try {
            const user = await this.userModel.findOne({ where: { id } });
            if (user) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Usuario encontrado', user);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findOneByUserName(res, userName) {
        try {
            const user = await this.userModel.findOne({ where: { userName } });
            if (user) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Usuario encontrado', user);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async findByEmail(res, userEmail) {
        try {
            const user = await this.userModel.findOne({ where: { userEmail } });
            if (user) {
                return (0, customResponses_1.customResponse)(true, res, 200, 'Usuario encontrado', user);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async update(res, id, updateUserDto) {
        try {
            const user = await this.userModel.findOne({ where: { id } });
            if (user) {
                await user.update(updateUserDto);
                return (0, customResponses_1.customResponse)(true, res, 200, 'Usuario actualizado', user);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async remove(res, id) {
        try {
            const user = this.userModel.findOne({ where: { id } });
            if (user) {
                this.userModel.destroy({ where: { id } });
                return (0, customResponses_1.customResponse)(true, res, 200, 'Usuario eliminado', null);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async updatePassword(res, id, password) {
        try {
            const user = await this.userModel.findOne({ where: { id } });
            if (user) {
                const newPassword = await (0, password_1.hashPassword)(password.password);
                await user.update({ userPassword: newPassword });
                return (0, customResponses_1.customResponse)(true, res, 200, 'Contraseña actualizada', null);
            }
            return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
        }
        catch (error) {
            console.log('ERROR ----->', error);
            return (0, customResponses_1.badResponse)(res);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map