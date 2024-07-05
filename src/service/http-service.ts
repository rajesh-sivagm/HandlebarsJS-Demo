import axios, {
  AxiosInstance,
  AxiosResponse,
  RawAxiosRequestConfig,
} from "axios";

export async function triggerHttpCall(
  url: string,
  transformedRequest: string
): Promise<any> {
  let httpClient: AxiosInstance = axios.create({
    baseURL: url,
  });

  const headers: RawAxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const response: AxiosResponse = await httpClient.post(
    "",
    transformedRequest,
    headers
  );

  console.log("Response from API - ", response);

  return response.data;
}
