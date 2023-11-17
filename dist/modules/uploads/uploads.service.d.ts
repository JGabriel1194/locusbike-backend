/// <reference types="multer" />
import { Response } from 'express';
export declare class UploadsService {
    constructor();
    UploadFile(res: Response, folder: string, file: Express.Multer.File): Promise<void>;
}
