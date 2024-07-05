export interface InputRequest {
  url: string;
  action: string;
  payload: InputRequestPayload;
}

export interface InputRequestPayload {
  name: string;
  job: string;
  email: string;
  password: string;
  countryName: string;
}
