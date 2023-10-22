import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { DataTypes } from "@sequelize/core";
export class CreateUserDto {

  @ApiProperty()
  userName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email:string;

  @ApiProperty()
  password: string;

  @ApiProperty(
      {
        type: 'string',
        description: 'List of user roles',
        example: ['admin', 'user'],
      }
  )
  userRoles: string;

  @ApiProperty()
  isActive: boolean;
}
