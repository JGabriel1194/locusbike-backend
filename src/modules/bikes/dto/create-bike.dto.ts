import { ApiProperty } from "@nestjs/swagger";

export class CreateBikeDto {
    @ApiProperty({
        type: 'string',
        description: 'Serie',
        example: '123456789',
    })
    bikeSerie: String;

    @ApiProperty({
        type: 'string',
        description: 'Marca',
        example: 'Trek',
    })
    bikeBrand: string;

    @ApiProperty({
        type: 'string',
        description: 'Modelo',
        example: 'Madone',
    })
    bikeModel: string;

    @ApiProperty({
        type: 'string',
        description: 'Tamaño',
        example: 'M',
    })
    bikeSize: string;

    @ApiProperty({
        type: 'string',
        description: 'Color',
        example: 'Rojo',
    })
    bileColor: string;

    @ApiProperty({
        type: 'string',
        description: 'Año',
        example: '2020',
    })
    bikeYear: Date;

    @ApiProperty({
        type: 'string',
        description: 'Material de la bicicleta',
        example: 'Carbono',
    })
    bikeMaterial: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de frenos',
        example: 'Ruta',
    })
    bikeBrake: string;

    @ApiProperty({
        type: 'string',
        description: 'Marca de frenos',
        example: 'Shimano',
    })
    bikeBrakeBrand: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de manubrio',
        example: 'Ruta',
    })
    bikeHandlebar: string;

    @ApiProperty({
        type: 'string',
        description: 'Potencia o soprte',
        example: 'Trek',
    })
    bikePotency: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de transmisión',
        example: 'Shimano dura-ace',
    })
    bikeTransmission: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de pedales',
        example: 'Shimano',
    })
    bikePedal: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de asiento',
        example: 'Fizi',
    })
    bikeSeat: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de rines',
        example: 'Campagnolo',
    })
    bikeRing: string;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de llantas',
        example: 'Michelin',
    })
    bikeTire: string;

    @ApiProperty({
        type: 'string',
        description: 'Estado de la bicicleta',
        example: 'Excelente',
    })
    bikeState:string;
}
