import { col } from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column
  userName: string;

  @Column
  userEmail: string;

  @Column
  userPassword: string;

  @Column
  userCedula: string;

  @Column
  userPhone: string;

  @Column
  userImage: string;

  @Column
  userAddres: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  // @ForeignKey(() => Role)
  // @Column
  // roleId: number;

  // @BelongsTo(() => Role)
  // @Column
  // role: Role;

}
