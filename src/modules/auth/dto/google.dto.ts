import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class GoogleDto {
    @ApiProperty({
        type: 'string',
        description: 'Google token',
        example: '123456789',
    })
    @IsNotEmpty({
        message: 'El token es obligatorio',
    })
    googleToken: string;
}
