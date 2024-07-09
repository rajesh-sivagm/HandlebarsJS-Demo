import Handlebars from "handlebars";
import { InputRequest } from "../model/input-request";

export function transformRequest(
  inputRequest: InputRequest,
  config: Config
): string {
  const requestTemplate = Handlebars.compile(config.requestTemplate ?? "");
  const transformedRequest = requestTemplate(inputRequest);

  console.log("Transformed Request - ", transformedRequest);
  return transformedRequest;
}

export function transformResponse(response: any, config: Config): string {
  const responseTemplate = Handlebars.compile(config.responseTemplate ?? "");
  const transformedResponse = responseTemplate(response);

  console.log("Transformed Response - ", transformedResponse);
  return transformedResponse;
}
