import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from '@sequelize/core';

@Table
export class User extends Model<User> {

  @Column
  userName: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  userRoles: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
