import { ApiProperty } from "@nestjs/swagger";

export class CreateModelDto {
    @ApiProperty({
        type: 'string',
        description: 'Modelo',
        example: 'Trek',
    })
    modelName: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de modelo',
        example: 'Bicicleta',
    })
    modelDetail: string;
}
