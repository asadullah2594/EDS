import SignUp from "../components/views/SignUp";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, toastify } from "src/redux/slices/userSlice";
import { SignUpService } from "src/services/services";
import LottieLoader from "src/loader/LottieLoader";

const SignUpContaier = () => {
  const loading = useSelector((state: any) => state?.user?.isLoading);
  const [toggle, setToggle] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Submit function
  const onSubmit = async (data) => {
    dispatch(setLoading(true));

    try {
      let res = await SignUpService(data);
      if (res.status === 200) {
        dispatch(setLoading(false));
        setToggle(true);
        toastify("success", res?.data?.data?.message);
      }
    } catch (e) {
      dispatch(setLoading(false));
      console.log(e);
      toastify("error", e.response.data.message);
    }
  };
  return (
    <>
      {loading ? (
        <LottieLoader />
      ) : (
        <SignUp
          toggle={toggle}
          setToggle={setToggle}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
        />
      )}
    </>
  );
};

export default SignUpContaier;
