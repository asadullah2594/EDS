// import axios from "src/axios/axios";
// import {
//   ASSIGN_TO_ME,
//   GET_HR,
//   GREVINCE,
//   GREVINCE_DETAILS,
//   GREVINCE_LIST,
//   HOME,
//   POST_COMMENT,
//   POST_GREVINCE,
//   RESOLVE_GREVANCE,
//   UPDATE_COMMENTS_SEEN,
// } from "src/constants/apiRoutes";

import axios from "src/axios/axios";
import {
  CHECK_TENANT,
  GET_INDUSTRIES,
  LOGIN,
  REGISTER_TENANT,
  SIGN_UP,
  VERIFY_TOKEN,
} from "src/constants/apiEndPoints";

// export const GetUser = (queryParams) => {
//   return axios.get(`${HOME}/${queryParams}`);
// };
// export const GetGrevinceData = (queryParams) => {
//   return axios.get(`${GREVINCE}?${queryParams}`);
// };
// export const GetGrevinceList = (queryParams) => {
//   return axios.get(`${GREVINCE_LIST}?${queryParams}`);
// };
// export const GetGrevinceDetails = (queryParams) => {
//   return axios.get(`${GREVINCE_DETAILS}?${queryParams}`);
// };
// export const PostGrevinceData = (payload) => {
//   return axios.post(`${POST_GREVINCE}`, payload);
// };
// export const PostComment = (payload) => {
//   return axios.post(`${POST_COMMENT}`, payload);
// };
// export const PostAssignHr = (payload) => {
//   return axios.post(`${ASSIGN_TO_ME}`, payload);
// };

// export const GetHrs = (payload) => {
//   return axios.get(`${GET_HR}?${payload}`);
// };

// export const PostCommints = (payload) => {
//   return axios.post(`${ASSIGN_TO_ME}`, payload);
// };
// export const ResolveGrevance = (payload) => {
//   return axios.post(`${RESOLVE_GREVANCE}`, payload);
// };

// export const UpdateCommentSeenCount = (id) => {
//   return axios.put(`${UPDATE_COMMENTS_SEEN}?commentId=${id}`)
// }

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
