/// <reference types="multer" />
import { UploadsService } from './uploads.service';
import { Response } from 'express';
export declare class UploadsController {
    private readonly uploadsService;
    constructor(uploadsService: UploadsService);
    uploadImage(res: Response, file: Express.Multer.File): Promise<void>;
    uploadDocument(res: Response, file: Express.Multer.File): Promise<void>;
}
