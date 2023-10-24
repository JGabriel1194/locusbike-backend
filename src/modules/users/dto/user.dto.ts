import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    type: 'string',
    description: 'User name',
    example: 'John Doe',
  })
  userName: string;

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

  @ApiProperty({
    type: 'string',
    description: 'User cedula',
    example: '0123456789',
  })
  userCedula: string;

  @ApiProperty({
    type: 'string',
    description: 'User phone',
    example: '0123456789',
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
