import { Response, Request } from "express";

export interface ServiceResponseI {
  statusCode?: number;
  data?: unknown;
  message?: string | unknown;
  res: Response | any;
  req: Request | any;
}

export interface ErrorLogI {
  errorMessage: string;
  errorCode: number;
  url: string;
  method: string;
  params: object;
  query: object;
  body: object;
  headers: object;
}
