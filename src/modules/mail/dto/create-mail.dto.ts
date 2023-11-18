import { ApiProperty } from "@nestjs/swagger";

export class CreateMailDto {
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
}
