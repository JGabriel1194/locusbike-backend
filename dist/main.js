"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
const path_1 = require("path");
const hbs = require("hbs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder().addBearerAuth();
    ;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Locus Bike - API')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    })
        .addTag('users', 'Users API')
        .addTag('auth', 'Auth API')
        .addTag('uploads', 'Uploads API')
        .addTag('brands', 'Marcas API')
        .addTag('bikes', 'Bicicletas API')
        .addTag('models', 'Modelos API')
        .addTag('brakes', 'Frenos API')
        .addTag('handlebars', 'Manubrios API')
        .addTag('potencies', 'Potencias API')
        .addTag('seats', 'Asientos API')
        .addTag('transmissions', 'Transmisiones API')
        .addTag('seats', 'Asientos API')
        .addTag('rings', 'Aros API')
        .addTag('tires', 'Llantas API')
        .addTag('states', 'Estados API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentation', app, document);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views', 'partials'));
    await app.listen(app_module_1.AppModule.port);
}
bootstrap();
//# sourceMappingURL=main.js.map