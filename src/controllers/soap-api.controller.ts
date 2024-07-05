import { Request, RequestHandler, Response } from "express";
import { parseString } from "xml2js";
import { InputRequest } from "../model/input-request";
import { triggerHttpCall } from "../service/http-service";
import { transformRequest } from "../service/transformation-service";
import { getConfig } from "../util/config-util";

export const triggerSoapApi: RequestHandler = async (
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
        Payload: parseXmlResponse(response),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      Error: err,
    });
  }
};

function parseXmlResponse(xmldata: string) {
  let jsonData = "";
  parseString(xmldata, function (err, results) {
    jsonData = results;
  });

  return jsonData;
}
