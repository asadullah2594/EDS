import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SetupProfile from "src/components/views/SetUpProfile/SetupProfile";
import { RESOURCE_LISTING } from "src/constants";
import { SIGN_UP } from "src/constants/apiEndPoints";
import { useQuery } from "src/customHooks/useQuery";
import LottieLoader from "src/loader/LottieLoader";
import { setLoading, toastify, userSlice } from "src/redux/slices/userSlice";
import {
  CheckTenant,
  GetIndustriesService,
  RegisterTenant,
  VerifyToken,
} from "src/services/services";

const industryValues = [
  {
    id: 1,
    name: "Education",
  },
  {
    id: 2,
    name: "Health Care",
  },
];

interface OrgData {
  companyName: string;
  logo: File; // File input will be handled as FileList
  industry: string;
  address: string;
}
interface ProfileData {
  firstName: string;
  lastName: string;
  designation: string;
  password: string;
  confirmPassword: string;
}

const SetUpProfileContainer = () => {
  const query = useQuery();
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state: any) => state?.user?.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector((state: any) => state.user.token);
  const userEmail = useSelector((state: any) => state.user.user.email);
  const token = query.get("token");
  const email = query.get("email");
  const [step, setStep] = useState(1);
  const [organizationData, setOrganizationData] = useState<OrgData>();
  const [domain, setDomain] = useState("");
  const location = useLocation();
  const [industry, setIndustry] = useState(industryValues);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    // Update the user's input while preserving the prefix
    setDomain(e.target.value);
  };

  const pathWithoutQueryParams = location.pathname;
  useEffect(() => {
    getIndustries();
    if (!userToken || !userEmail) {
      if (token && email) {
        verifyToken();
      } else {
        navigate("/");
      }
    }
  }, []);
  const getIndustries = async () => {
    try {
      dispatch(setLoading(true));
      const res = await GetIndustriesService();
      if (res.status === 200) {
        setIndustry(res.data.data);
        dispatch(setLoading(false));
      }
    } catch (e) {
      console.log(e);
      toastify("error", e?.response?.data?.error);
      dispatch(setLoading(false));
    }
  };

  const verifyToken = async () => {
    console.log(email, encodeURIComponent(email));
    const params = `?email=${encodeURIComponent(email)}&token=${token}`;
    try {
      dispatch(setLoading(true));
      const res = await VerifyToken(params);
      if (res.status === 200) {
        const payload = {
          email: email,
          token: token,
        };
        dispatch(userSlice.actions.setToken(payload));

        dispatch(setLoading(false));
        navigate(pathWithoutQueryParams, { replace: true });
      }
    } catch (e) {
      toastify("error", e?.response?.data?.error);
      console.log(e);
      dispatch(setLoading(false));
      navigate("/");
    }
  };
  const handleStepTwo = (data) => {
    setOrganizationData(data);
    setStep(3);
  };
  const TenantCheck = async () => {
    const params = `?domain_name=${domain}`;
    try {
      dispatch(setLoading(true));
      const res = await CheckTenant(params);
      if (res.status === 200) {
        dispatch(setLoading(false));
        setStep(2);
      }
    } catch (e) {
      console.log(e);
      toastify("error", e?.response?.data?.error);
      dispatch(setLoading(false));
    }
  };

  const handleRegisterData = async (data: ProfileData) => {
    const payload = {
      email: userEmail,
      token: userToken,
      organization: {
        domain_name: domain,
        address: organizationData.address,
        name: organizationData.companyName,
        industry: organizationData.industry,
      },
      profile: {
        password: data.password,
        confirm_password: data.confirmPassword,
        first_name: data.firstName,
        last_name: data.lastName,
        designation: data.designation,
      },
    };
    try {
      dispatch(setLoading(true));
      const res = await RegisterTenant(payload);
      if (res.status === 200) {
        dispatch(setLoading(false));
        // setStep(2);
        // navigate(RESOURCE_LISTING);
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      toastify("error", e?.response?.data?.error);
      dispatch(setLoading(false));
    }
  };
  // const handleImageChange = (e: any) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImage(file);
  //     const reader: any = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader?.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      {loading ? (
        <LottieLoader />
      ) : (
        <SetupProfile
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          step={step}
          handleChange={handleChange}
          handleStepTwo={handleStepTwo}
          domain={domain}
          TenantCheck={TenantCheck}
          industry={industry}
          handleRegisterData={handleRegisterData}
        />
      )}
    </>
  );
};

export default SetUpProfileContainer;
