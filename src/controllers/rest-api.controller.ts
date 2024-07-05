import { NextFunction, Request, RequestHandler, Response } from "express";
import fs from "fs";
import { InputRequest } from "../model/input-request";
import { triggerHttpCall } from "../service/http-service";
import { transformRequest } from "../service/transformation-service";

export const triggerRestApi: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const inputRequest: InputRequest = req.body;
  const config: Config = getConfig(inputRequest);

  const transformedRequest = transformRequest(inputRequest, config.template);

  const response = await triggerHttpCall(config.url, transformedRequest);

  res.status(200).json({
    Response: {
      Payload: response,
    },
  });
};

function getConfig(inputRequest: InputRequest): Config {
  const file: Buffer = fs.readFileSync(
    `resources/${inputRequest.action}.json`,
    null
  );

  return JSON.parse(new TextDecoder().decode(file));
}
