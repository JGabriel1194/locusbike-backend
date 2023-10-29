import { ApiProperty } from "@nestjs/swagger";

export class CreateBrandDto {

    @ApiProperty({
        type: 'string',
        description: 'Brand name',
        example: 'Giant',
    })
    brandName: string;

    @ApiProperty({
        type: 'string',
        description: 'Brand tipe',
        example: 'Bicicleta',
    })
    brandTipe: string;

}
