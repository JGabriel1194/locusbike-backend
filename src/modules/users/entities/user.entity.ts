import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from '@sequelize/core';

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
  userRol: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
