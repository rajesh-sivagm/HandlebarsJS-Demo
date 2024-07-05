import axios, { AxiosInstance, AxiosResponse } from "axios";

export async function triggerHttpCall(
  config: Config,
  transformedRequest: string
): Promise<any> {
  let httpClient: AxiosInstance = axios.create();

  let response: AxiosResponse;

  if (config.method === "POST") {
    response = await httpClient.post(
      config.url,
      transformedRequest,
      getHttpHeaders(config)
    );
  } else {
    response = await httpClient.get(
      config.url + transformedRequest,
      getHttpHeaders(config)
    );
  }

  console.log("Response from API - ", response);
  return response.data;
}

function getHttpHeaders(config: Config) {
  return {
    headers: {
      "Content-Type": config.format,
      Accept: config.format,
    },
  };
}
