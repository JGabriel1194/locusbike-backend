import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
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
  @MinLength(10, {
    message: 'La cédula debe tener 10 dígitos',
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
  @MinLength(10, {
    message: 'El teléfono debe tener 10 dígitos',
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
    example: 'Calle 123',
  })
  userAddres: string;

  @ApiProperty({
    type: 'boolean',
    description: 'User status',
    example: true,
  })
  isActive: boolean;
}
