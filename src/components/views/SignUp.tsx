import { useState } from "react";
import siteLogo from "../../assets/siteLogo.svg";
import Button from "../common/Button";
const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col justify-between    gap-[var(--spacing-10,40px)]  bg-bluee-50-value h-[100vh] ">
      <div className="flex px-8 py-8">
        <img src={siteLogo} alt="site-logo" />
      </div>
      {!toggle ? (
        <div className="w-full flex items-center justify-center">
          <div className="w-[450px] p-[var(--spacing-8,32px)] flex flex-col items-center justify-center rounded-xl bg-white-value">
            <p className="text-[var(--color-gray-950,#030712)] text-center font-sans font-medium leading-[var(--font-line-height-10,40px)] tracking-[var(--font-letter-spacing-wide,0.2px)] text-3xl ">
              Get started with <span className="text-[#009875]">Emerald</span>{" "}
            </p>
            <p className="text-gray-600 font-sans font-light text-3  ">
              14 Day Free Trial. No Credit Card Required
            </p>
            <div className="w-full mt-11">
              <label
                htmlFor="email"
                className="block text-sm font-medium  text-gray-500 text-2 tracking-0 leading-5"
              >
                Enter Your Work Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Button
              variant="default"
              children="Sign Up"
              className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value "
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div className="mt-8 text-grey-600-value text-2 flex justify-start w-full">
              Have an account?{" "}
              <span className="text-primary-value ml-1.5 font-medium">
                Login
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="w-[564px] p-[var(--spacing-8,32px)] flex flex-col items-center justify-center rounded-xl bg-white-value">
            <div className=" w-full">
              <p className="text-[var(--color-gray-950,#030712)] text-left font-sans font-medium leading-[var(--font-line-height-10,40px)] tracking-[var(--font-letter-spacing-wide,0.2px)] text-3xl ">
                Account Confirmation Required
              </p>
              <p className="text-gray-600 font-sans font-normal text-2 mt-5  ">
                An email has been sent to{" "}
                <span className="font-bold">Designer@emerald.com</span>. Please
                check your email and click the link to confirm your account.
              </p>
              <p className="text-gray-600 font-sans font-normal text-2 mt-3  ">
                If you did not receive the email, please check your spam folder
                or
              </p>
            </div>
            <Button
              variant="default"
              children="Resend the confirmation email"
              onClick={() => {
                setToggle(!toggle);
              }}
              className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 "
            />
          </div>
        </div>
      )}

      <div className="mx-8 my-9 text-grey-600-value text-2 font-normal">
        © Emeralddata.io 2024
      </div>
    </div>
  );
};

export default SignUp;
