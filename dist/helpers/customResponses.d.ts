import { Response } from "express";
export declare const customResponse: (ok: boolean, res: Response, status: number, msg: string, data: any) => void;
export declare const badResponse: (res: Response) => void;
