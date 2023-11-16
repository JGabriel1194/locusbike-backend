import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadsService } from './uploads.service';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Public } from '../auth/auth.decorator';

@ApiTags('uploads')
@ApiBearerAuth()
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  //Method to upload a image
  /**
   * 
   * @param res - Response
   * @param file - File to upload
   * @returns 
   */
  @Public()
  @Post('image')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads/images',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const fileName = `${uniqueSuffix}${ext}`;
          return callback(null, fileName);
        },
      }),
    }),
  )
  uploadImage(@Res() res: Response, @UploadedFile() file: Express.Multer.File) {
    const folder = 'images';
    return this.uploadsService.UploadFile(res, folder, file);
  }

  //Method to upload a document
  /**
   * 
   * @param res - Response
   * @param file - File to upload
   * @returns 
   */
  @Post('document')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads/documents',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const fileName = `${uniqueSuffix}${ext}`;
          return callback(null, fileName);
        },
      }),
    }),
  )
  uploadDocument(
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const folder = 'documents';
    return this.uploadsService.UploadFile(res, folder, file);
  }
}