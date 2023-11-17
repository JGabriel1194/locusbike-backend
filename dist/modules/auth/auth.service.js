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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const customResponses_1 = require("../../helpers/customResponses");
const password_1 = require("../../helpers/password");
const sequelize_1 = require("@nestjs/sequelize");
const users_service_1 = require("../users/users.service");
const google_verify_1 = require("../../helpers/google-verify");
let AuthService = class AuthService {
    constructor(jwtService, usersService, userModel) {
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.userModel = userModel;
    }
    async signIn(res, signInDto) {
        try {
            const user = await this.userModel.findOne({ where: { userEmail: signInDto.userEmail } });
            if (!user) {
                return (0, customResponses_1.customResponse)(false, res, 404, 'Usuario no encontrado', null);
            }
            const isMatch = await (0, password_1.checkPassword)(signInDto.userPassword, user.userPassword);
            if (!isMatch) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'Contraseña incorrecta', null);
            }
            const payload = { username: user.userName, sub: user.id };
            const token = this.jwtService.sign(payload);
            return (0, customResponses_1.customResponse)(true, res, 200, 'Login correcto', { token });
        }
        catch (error) {
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async register(res, registerDto) {
        try {
            console.log('registerDto', registerDto);
            const existUser = await this.userModel.findOne({
                where: { userEmail: registerDto.userEmail },
            });
            if (existUser) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'Usuario ya existe', null);
            }
            await this.usersService.create(res, registerDto);
        }
        catch (error) {
            return (0, customResponses_1.badResponse)(res);
        }
    }
    async loginGoogle(res, googleDto) {
        try {
            const googleUser = await (0, google_verify_1.googleVerify)(googleDto.googleToken);
            if (!googleUser) {
                return (0, customResponses_1.customResponse)(false, res, 400, 'Token de google no es válido', null);
            }
            const user = await this.userModel.findOne({ where: { userEmail: googleUser.email } });
            let newUser;
            if (!user) {
                newUser = await this.usersService.create(res, {
                    userName: googleUser.name,
                    userEmail: googleUser.email,
                    userPassword: '123456',
                    userCedula: '123456789',
                    userPhone: '123456789',
                    userImage: googleUser.picture,
                    userAddres: 'Calle 123',
                    isActive: true,
                });
                const payload = { username: newUser.userName, sub: newUser.id };
                const token = this.jwtService.sign(payload);
                return (0, customResponses_1.customResponse)(true, res, 200, 'Login correcto', { token });
            }
            const payload = { username: user.userName, sub: user.id };
            const token = this.jwtService.sign(payload);
            return (0, customResponses_1.customResponse)(true, res, 200, 'Login correcto', { token });
        }
        catch (error) {
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService, Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map