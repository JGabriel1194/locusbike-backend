import { Response } from "express";

/**
 * method to return a custom response
 * @param ok - Indicates if the request was successful
 * @param res - The response object 
 * @param status - The status code of the response
 * @param msg - The message of the response
 * @param data - The data of the response
 * @return
 */
  export const customResponse = (ok: boolean, res: Response, status: number, msg: string, data: any) => {
    res.status(status).json({
      ok,
      msg,
      data,
    });
  }

  // method to return a bad response
  export const badResponse = (res: Response) => {
    res.status(500).json({
      ok: false,
      msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
  };
