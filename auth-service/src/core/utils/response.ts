import { Response } from 'express';

export class ResponseUtil {
  static success(res: Response, data: any, message = 'Success') {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static created(res: Response, data: any, message = 'Created successfully') {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  static error(res: Response, message = 'Something went wrong', status = 500) {
    return res.status(status).json({
      success: false,
      message,
    });
  }
}
