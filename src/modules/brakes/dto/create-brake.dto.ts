import { ApiProperty } from "@nestjs/swagger";

export class CreateBrakeDto {
  @ApiProperty({
    type: 'string',
    description: 'Brake name',
    example: 'Calipers',
  })
  brakeTipe: string;

  @ApiProperty({
    type: 'string',
    description: 'Brake brand',
    example: 'Shimano',
  })

  brakeBrand: string;
  @ApiProperty({
    type: 'string',
    description: 'Brake image',
    example:
      'https://www.shimano.com/content/dam/global/cycle-sports/en/global/corporate/_img/series/brake/br-r9100/br-r9100_2.jpg',
  })
  brakeImage: string;

  @ApiProperty({
    type: 'string',
    description: 'Brake detail',
    example: 'Shimano Dura-Ace BR-R9100 Rim Brake Calipers',
  })
  breakeDetail: string;
}
