import Handlebars from "handlebars";
import { InputRequest } from "../model/input-request";

export function transformRequest(
  inputRequest: InputRequest,
  templateFile: string
): string {
  const requestTemplate = Handlebars.compile(templateFile ?? "");
  const transformedRequest = requestTemplate(inputRequest);
  console.log("Transformed request - ", transformedRequest);

  return requestTemplate(inputRequest);
}
