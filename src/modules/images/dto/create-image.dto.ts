import { ApiProperty } from "@nestjs/swagger";

export class CreateImageDto {
    @ApiProperty({
        type: 'number',
        description: 'ID del usuario',
        example: 1,
    })
    userID: string;

    @ApiProperty({
        type: 'number',
        description: 'ID de la bicicleta',
        example: 1,
    })
    bikeID: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de imagen',
        example: 'bicicleta',
    })
    imageType: string;

    @ApiProperty({
        type: 'string',
        description: 'URL de la imagen',
        example: 'http://localhost:3000/uploads/images/1620311022759-586069487.jpg',
    })
    imageUrl: string;
}
