import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { SERVER_URL } from "../constants";
import store from "src/redux/store";
// import { GenerateToken, Logout } from 'src/services/dashboardServices';
// import { GENERATE_TOKEN } from 'src/constants/apiRoutes';

export const requestHandler = (request: InternalAxiosRequestConfig) => {
  // if (request.method === 'get') {
  //   request.url = '/server.php?url=' + url;
  // } else {
  //   request.url = '/server.php?url=' + url;
  //   if (typeof request.data === 'undefined') {
  //     request.data = { url: url };
  //   } else {
  //     request.data['url'] = url;
  //   }
  // }
  console.log();
  const token = "Bearer" + " " + store.getState().user.accessToken;
  request.headers.Authorization = token;

  request.withCredentials = true;
  request.baseURL = SERVER_URL;

  const url = request.baseURL + request.url!;

  return request;
};

export const successResponseHandler = (response: AxiosResponse) => {
  return {
    ...response,
    data: response.data,
  };
};
// const AppLogout = async () => {
//   try {
//     let res = await Logout();

//     if (res.status === 200) {
//       store.dispatch({ payload: {}, type: 'user/logout' });
//       document.location = res.data;
//     }
//   } catch (e) {}
// };

export const errorResponseHandler = (error: AxiosError) => {
  // if (error.code === 'ERR_NETWORK') {
  //   document.location = SERVER_URL;
  // }
  // if (
  //   error.response &&
  //   (error.response.status === 401 ||
  //     error.response.status === 403 ||
  //     error.response.status === 421)
  // ) {
  //   AppLogout();
  // }

  // if (error.response) {
  //   // The request was made and the server responded with a status code
  //   // that falls out of the range of 2xx
  //   if (error.response.status === 500) {
  //     // Internal Server Error
  //     // Redirect to SERVER_URL
  //     window.location.assign(SERVER_URL);
  //   } else if (error.response.status === 403) {
  //     // Handle CORS error or any other specific error if needed
  //     // You can customize this based on the error status code
  //     // For now, just reject the promise
  //     return Promise.reject(error);
  //   }
  // } else if (error.request) {
  //   // The request was made but no response was received
  //   // This can happen if the server doesn't respond or if there's a network issue
  //   console.error('Request made but no response received:', error.request);
  // } else {
  //   // Something happened in setting up the request that triggered an Error
  //   console.error('Error setting up request:', error.message);
  // }

  return Promise.reject(error);
};
