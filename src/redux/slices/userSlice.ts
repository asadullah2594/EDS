import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    user_name: "",
    email: "",
    isManager: "",
  },
  isLoading: false,
  token: "",
  subscriptions: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, user_name, managerFlag, email } = action.payload;
      state.isAuthenticated = true;
      state.user = {
        ...state.user,
        id: id,
        user_name: user_name,
        isManager: managerFlag,
        email: email,
      };
      // state.token = token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        id: "",
        user_name: "",
        email: "",
        isManager: "",
      };
      state.token = "";
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    changeUserName: (state, action) => {
      const { user_name } = action.payload;
      state.user.user_name = user_name;
    },
    setSubscriptions: (state, action) => {
      state.subscriptions = action.payload.subscriptions;
    },
  },
});

export const { login, logout, setLoading, changeUserName, setSubscriptions } =
  userSlice.actions;

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
