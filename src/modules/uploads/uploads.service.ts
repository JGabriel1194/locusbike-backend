import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { json } from 'sequelize';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { FileDto } from './dto/file.dto';

@Injectable()
export class UploadsService {
  constructor() {}

  /**
   * Method to upload a file
   * @param res
   * @param file
   * @returns
   */
  async UploadFile(res: Response,folder: string, file: Express.Multer.File){
    try {
        const uploadFile: FileDto = {
            fileName: file.filename,
            fileType: file.mimetype,
            filePath: `${process.env.HOSTNAME}/uploads/${folder}/${file.filename}`,
        }
        return customResponse(true,res, 201, 'Archivo subido', uploadFile);
    } catch (error) {
      console.log('Error --->',error);
        return badResponse(res);
    }
  }
}