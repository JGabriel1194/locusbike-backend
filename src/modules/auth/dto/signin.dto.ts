import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignInDto {
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

  @ApiProperty({
    type: 'string',
    description: 'User password',
    example: '123456789',
  })
  @IsNotEmpty({
    message: 'La contraseña es obligatoria',
  })
  userPassword: string;
}
