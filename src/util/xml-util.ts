import { parseString } from "xml2js";

export function parseXmlResponse(xmldata: string) {
  let jsonData = "";
  parseString(xmldata, function (err, results) {
    jsonData = results;
  });

  return jsonData;
}
