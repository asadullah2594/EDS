import axios, { AxiosRequestConfig } from "axios";
import { SERVER_URL } from "../constants";

import {
  errorResponseHandler,
  requestHandler,
  successResponseHandler,
} from "./interceptors";
export enum ContentType {
  json = "application/json",
  multipart = "multipart/form-data",
}
const getAxiosInstance = (
  config: AxiosRequestConfig = {
    headers: { contentType: ContentType.json },
  }
) => {
  const instance = axios.create({
    baseURL: SERVER_URL,
    headers: {
      "Content-Type": config.headers.contentType || ContentType.json,
      Accept: config.headers.contentType || ContentType.json,
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(
    successResponseHandler,
    errorResponseHandler
  );

  return instance;
};

export default getAxiosInstance();
