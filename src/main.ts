import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import hbs = require('hbs');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //Configuración de swagger
  const options = new DocumentBuilder().addBearerAuth();
;
  const config = new DocumentBuilder()
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
    .addTag('rings','Aros API')
    .addTag('tires','Llantas API')
    .addTag('states','Estados API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));
  //Arrancar el servidor en el puerto que nos indique el sistema operativo
  await app.listen(AppModule.port);
}
bootstrap();
