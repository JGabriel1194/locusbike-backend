import { Response } from "express";

/**
 * method to return a custom response
 * @param res 
 * @param status 
 * @param message 
 * @param data 
 * @returns 
 */
  export const customResponse = (res: Response, statusCode: number, message: [string], data: any) => {
    return res.status(statusCode).json({
      statusCode,
      message,
      data,
    });
  }

  export const badResponse = (res: Response) => {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  };
