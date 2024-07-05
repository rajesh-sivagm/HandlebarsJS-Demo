import Handlebars from "handlebars";
import { InputRequest } from "../model/input-request";

export function transformRequest(
  inputRequest: InputRequest,
  config: Config
): string {
  const requestTemplate = Handlebars.compile(config.template ?? "");
  const transformedRequest = requestTemplate(inputRequest);
  console.log("Transformed request - ", transformedRequest);

  return requestTemplate(inputRequest);
}
