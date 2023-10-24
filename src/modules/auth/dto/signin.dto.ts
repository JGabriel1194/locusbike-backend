import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    type: 'string',
    description: 'User email',
    example: 'john@gmail.com',
  })
  
  userEmail: string;

  @ApiProperty({
    type: 'string',
    description: 'User password',
    example: '123456789',
  })
 
  userPassword: string;
}
