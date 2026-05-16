export class ResponseUtil {
  static success(res: any, data: any, message = 'Success') {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static created(res: any, data: any) {
    return res.status(201).json({
      success: true,
      data,
    });
  }
}
