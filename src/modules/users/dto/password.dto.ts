import { ApiProperty } from '@nestjs/swagger';

export class PasswordDto {
    @ApiProperty({
        type: 'string',
        description: 'User password',
        example: '123456789',
    })
    password: string;
}
