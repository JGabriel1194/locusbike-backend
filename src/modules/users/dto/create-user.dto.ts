import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { DataTypes } from "@sequelize/core";
export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    description: 'User name',
    example: 'John Doe',
  })
  @IsNotEmpty({
    message: 'El nombre es obligatorio',
  })
  userName: string;

  @ApiProperty({
    type: 'string',
    description: 'User email',
    example: 'john@gmail.com',
  })
  @IsNotEmpty({
    message: 'El email es obligatorio',
  })
  @IsEmail()
  userEmail: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'La contraseña es obligatoria',
  })
  userPassword: string;

  @ApiProperty({
    type: 'string',
    description: 'User cedula',
    example: '123456789',
  })
  @IsNotEmpty({
    message: 'La cédula es obligatoria',
  })
  userCedula: string;

  @ApiProperty({
    type: 'string',
    description: 'User phone',
    example: '123456789',
  })
  @IsNotEmpty({
    message: 'El teléfono es obligatorio',
  })
  userPhone: string;

  @ApiProperty({ 
    type: 'string',
    description: 'User image',
    example: 'https://www.google.com',
  })
  userImage: string;

  @ApiProperty({
    type: 'string',
    description: 'User addres',
    example: 'Calle 123'
  })
  userAddres: string;

  @ApiProperty({
    type: 'boolean',
    description: 'User status',
    example: true
  })
  isActive: boolean;
}
