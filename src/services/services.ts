import axios from "src/axios/axios";
import {
  CHECK_TENANT,
  GET_INDUSTRIES,
  LOGIN,
  REGISTER_TENANT,
  SIGN_UP,
  VENDOR_LISTING,
  VERIFY_TOKEN,
} from "src/constants/apiEndPoints";

export const SignUpService = (payload) => {
  return axios.post(`${SIGN_UP}`, payload);
};
export const RegisterTenant = (payload) => {
  return axios.post(`${REGISTER_TENANT}`, payload);
};
export const VerifyToken = (queryParams) => {
  return axios.get(`${VERIFY_TOKEN}${queryParams}`);
};
export const CheckTenant = (queryParams) => {
  return axios.get(`${CHECK_TENANT}${queryParams}`);
};
export const GetIndustriesService = () => {
  return axios.get(`${GET_INDUSTRIES}`);
};
export const LoginService = (tenant, payload) => {
  return axios.post(`/${tenant}${LOGIN}`, payload);
};
export const GetVendersService = (tenant) => {
  return axios.get(`/${tenant}${VENDOR_LISTING}`);
};
