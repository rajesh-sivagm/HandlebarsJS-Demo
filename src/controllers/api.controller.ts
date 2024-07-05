import { Request, RequestHandler, Response } from "express";
import { InputRequest } from "../model/input-request";
import { triggerHttpCall } from "../service/http-service";
import { transformRequest } from "../service/transformation-service";
import { getConfig } from "../util/config-util";
import { parseXmlResponse } from "../util/xml-util";

export const triggerApi: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const inputRequest: InputRequest = req.body;
    const config: Config = getConfig(inputRequest);

    const transformedRequest = transformRequest(inputRequest, config);

    const response = await triggerHttpCall(config, transformedRequest);

    res.status(200).json({
      Response: {
        Payload: config.type === "SOAP" ? parseXmlResponse(response) : response,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      Error: err,
    });
  }
};