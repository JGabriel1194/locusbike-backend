import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; //para variables de entorno
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { UploadsModule } from './modules/uploads/uploads.module';
import { BrandsModule } from './modules/brands/brands.module';
import { ModelsModule } from './modules/models/models.module';
import { BrakesModule } from './modules/brakes/brakes.module';
import { HandlebarsModule } from './modules/handlebars/handlebars.module';
import { PotenciesModule } from './modules/potencies/potencies.module';
import { TransmisionsModule } from './modules/transmisions/transmisions.module';
import { PedalsModule } from './modules/pedals/pedals.module';
import { SeatsModule } from './modules/seats/seats.module';
import { RingsModule } from './modules/rings/rings.module';
import { TiresModule } from './modules/tires/tires.module';
import { StatesModule } from './modules/states/states.module';
import { BikesModule } from './modules/bikes/bikes.module';
import { MailModule } from './modules/mail/mail.module';
import { ImagesModule } from './modules/images/images.module';


@Module({
  imports: [
    //Configuración de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),
    //Configuración de la base de datos
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    //Configuración de JWT
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        // signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname,'../','public')
    // }),
    UsersModule,
    AuthModule,
    UploadsModule,
    BrandsModule,
    ModelsModule,
    BrakesModule,
    HandlebarsModule,
    PotenciesModule,
    TransmisionsModule,
    PedalsModule,
    SeatsModule,
    RingsModule,
    TiresModule,
    StatesModule,
    BikesModule,
    MailModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    }
  ],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT') || 3000;
  }
}
