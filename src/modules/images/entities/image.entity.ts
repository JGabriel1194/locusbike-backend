import { Column, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Bike } from "src/modules/bikes/entities/bike.entity";
import { User } from "src/modules/users/entities/user.entity";

@Table
export class Image extends Model<Image> {
  @Column
  @ForeignKey(() => User)
  userId: number;

  @Column
  @ForeignKey(() => Bike)
  bikeId: number;

  @Column
  imageType: string;

  @Column
  imageUrl: string;

  @HasOne(() => Bike, 'id')
  bike: Bike;
}
