import fs from "fs";
import { InputRequest } from "../model/input-request";

export function getConfig(inputRequest: InputRequest): Config {
  const file: Buffer = fs.readFileSync(
    `resources/${inputRequest.action}.json`,
    null
  );

  return JSON.parse(new TextDecoder().decode(file));
}
