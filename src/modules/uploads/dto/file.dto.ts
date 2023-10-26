import { ApiProperty } from "@nestjs/swagger";

export class FileDto {
    @ApiProperty({
        type: 'string',
        description: 'File name',
        example: 'image.png',
    })
    fileName: string;

    @ApiProperty({
        type: 'string',
        description: 'File type',
        example: 'image/png',
    })
    fileType: string;

    @ApiProperty({
        type: 'string',
        description: 'File path',
        example: 'https://localhost:3000/uploads/image.png',
    })
    filePath: string;
}   