import axios, { AxiosInstance, AxiosResponse } from "axios";

export async function triggerHttpCall(
  config: Config,
  transformedRequest: string
): Promise<any> {
  let httpClient: AxiosInstance = axios.create();

  let response: AxiosResponse;

  if (config.method === "POST") {
    response = await httpClient.post(config.url, transformedRequest, {
      headers: {
        "Content-Type": config.type,
        Accept: config.type,
      },
    });
  } else {
    response = await httpClient.get(config.url + transformedRequest, {
      headers: {
        "Content-Type": config.type,
        Accept: config.type,
      },
    });
  }

  console.log("Response from API - ", response);
  return response.data;
}
