import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setLoading, toastify } from "src/redux/slices/userSlice";
import { CheckTenant } from "src/services/services";

const AuthenticatedRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: any) => state.user.isAuthenticated
  );
  const [valid, setValid] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  // Capture the path segments
  const segments = location.pathname.split("/").filter(Boolean);
  const tenant = useSelector((state: any) => state.user.tenant);

  useEffect(() => {
    const validateRoute = async () => {
      if (isAuthenticated === false) {
        if (segments[1] == "login") {
          await TenantCheck();
          return;
        }
        if (segments[0] !== tenant) {
          navigate("/404");
        }

        navigate("/");
      } else {
        setValid(true);
      }
    };

    validateRoute();
  }, [isAuthenticated, navigate, tenant, segments]);

  const TenantCheck = async () => {
    const params = `?domain_name=${segments[0]}`;
    try {
      dispatch(setLoading(true));
      const res = await CheckTenant(params);
      if (res.status === 200) {
        dispatch(setLoading(false));
        setValid(false);
        navigate("/"); // Tenant is valid
      }
    } catch (e) {
      console.log(e);
      //   toastify("error", e?.response?.data?.error || "An error occurred");
      dispatch(setLoading(false));
      setValid(true); // Tenant is not valid
      //   navigate("/"); // Redirect to the root path on failure
    }
  };

  if (valid === null) {
    return <div>Loading...</div>;
  }

  // If authenticated and tenant is valid, render the passed component
  return valid ? <Component /> : null;
};

export default AuthenticatedRoute;
