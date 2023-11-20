import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Image } from 'src/modules/images/entities/image.entity';

@Table
export class Bike extends Model<Bike> {
  @Column
  bikeSerie: String;

  @Column
  bikeType: string;

  @Column
  bikeBrand: string;

  @Column
  bikeModel: string;

  @Column
  bikeDate: Date;

  @Column
  bikeSize: string;

  @Column
  bikeColor: string;

  @Column
  bikeMaterial: string;

  @Column
  bikeBrakeBrand: string;

  @Column
  bikeBrake: string;

  @Column
  bikeRing: string;

  @Column
  bikeTire: string;

  @Column
  bikeTransmission: string;

  @Column
  bikeDesviador: string;

  @Column
  bikeBiela: string;

  @Column
  bikeFrontSuspension: string;

  @Column
  bikeBackSuspension: string;

  @Column
  bikeSeat: string;

  @Column
  bikeHandlebar: string;

  @Column
  bikePedal: string;

  @Column
  bikeState: string;

  @Column
  userId: number;

  // @HasMany(() => Image)
  // images: Image[];
}
