import { parseString } from "xml2js";
import util from "util";

export function parseXmlResponse(xmldata: string) {
  let jsonData = "";

  parseString(xmldata, function (err, results) {
    jsonData = results;
  });

  console.log(
    "Transformed XML to JSON - ",
    util.inspect(jsonData, { showHidden: false, depth: null, colors: true })
  );

  return jsonData;
}
