import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    first_name: "",
    email: "",
    company_role: "",
    last_name: "",
    permissions: [],
    role: "",
  },
  isLoading: false,
  token: "",
  accessToken: "",
  refreshToken: "",
  tenant: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, refreshToken, tenant, user } = action.payload;
      state.isAuthenticated = true;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.tenant = tenant;
      state.user = user;
    },
    setToken: (state, action) => {
      const { token, email } = action.payload;
      console.log(token, email);
      state.isAuthenticated = false;
      state.token = token;
      state.user = {
        ...state.user,
        email: email,
      };
      // state.token = token;
    },

    // logout: (state) => {
    //   state.isAuthenticated = false;
    //   state.user = {
    //     id: "",
    //     user_name: "",
    //     email: "",
    //     isManager: "",
    //   };
    //   state.token = "";
    // },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, setLoading } = userSlice.actions;

export const toastify = (type, toastMessage) => {
  switch (type) {
    case "success":
      toast.success(toastMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "error":
      toast.error(toastMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "warning":
      toast.warn(toastMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    default:
      break;
  }
};

export default userSlice.reducer;
