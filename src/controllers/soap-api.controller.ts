import { NextFunction, Request, RequestHandler, Response } from "express";

export const triggerSoapApi: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    Response: {
      Payload: "To be Implemented",
    },
  });
};
