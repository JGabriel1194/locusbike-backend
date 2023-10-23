import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  //Arrancar el servidor en el puerto que nos indique el sistema operativo
  await app.listen(AppModule.port);
}
bootstrap();
