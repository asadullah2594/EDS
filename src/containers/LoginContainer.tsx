import { useDispatch, useSelector } from "react-redux";
import Login from "src/components/views/Login";
import { setLoading, toastify, userSlice } from "src/redux/slices/userSlice";
import { LoginService } from "src/services/services";
import { useLocation } from "react-router-dom";
import LottieLoader from "src/loader/LottieLoader";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector((state: any) => state?.user?.isLoading);

  // Capture the path segments
  const segments = location.pathname.split("/").filter(Boolean);

  const handleSubmit = async (data: any) => {
    try {
      dispatch(setLoading(true));
      const res = await LoginService(segments[0], data);
      if (res.status === 200) {
        dispatch(setLoading(false));
        dispatch(userSlice.actions.login(res.data.data));
      }
    } catch (e) {
      console.log(e);
      toastify("error", e?.response?.data?.data?.error);
      dispatch(setLoading(false));
    }
  };

  return (
    <>{loading ? <LottieLoader /> : <Login handleLogin={handleSubmit} />}</>
  );
};

export default LoginContainer;
