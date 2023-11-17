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
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const auth_guard_1 = require("./modules/auth/auth.guard");
const jwt_1 = require("@nestjs/jwt");
const uploads_module_1 = require("./modules/uploads/uploads.module");
const brands_module_1 = require("./modules/brands/brands.module");
const models_module_1 = require("./modules/models/models.module");
const brakes_module_1 = require("./modules/brakes/brakes.module");
const handlebars_module_1 = require("./modules/handlebars/handlebars.module");
const potencies_module_1 = require("./modules/potencies/potencies.module");
const transmisions_module_1 = require("./modules/transmisions/transmisions.module");
const pedals_module_1 = require("./modules/pedals/pedals.module");
const seats_module_1 = require("./modules/seats/seats.module");
const rings_module_1 = require("./modules/rings/rings.module");
const tires_module_1 = require("./modules/tires/tires.module");
const states_module_1 = require("./modules/states/states.module");
const bikes_module_1 = require("./modules/bikes/bikes.module");
let AppModule = AppModule_1 = class AppModule {
    constructor(configService) {
        this.configService = configService;
        AppModule_1.port = +this.configService.get('PORT') || 3000;
    }
};
AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    dialect: configService.get('DB_DIALECT'),
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    autoLoadModels: true,
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            uploads_module_1.UploadsModule,
            brands_module_1.BrandsModule,
            models_module_1.ModelsModule,
            brakes_module_1.BrakesModule,
            handlebars_module_1.HandlebarsModule,
            potencies_module_1.PotenciesModule,
            transmisions_module_1.TransmisionsModule,
            pedals_module_1.PedalsModule,
            seats_module_1.SeatsModule,
            rings_module_1.RingsModule,
            tires_module_1.TiresModule,
            states_module_1.StatesModule,
            bikes_module_1.BikesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'APP_GUARD',
                useClass: auth_guard_1.AuthGuard,
            }
        ],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map