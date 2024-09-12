import { useForm, SubmitHandler } from "react-hook-form";
import { Info } from "lucide-react";
import { EyeOpen, EyeClosed } from "src/assets/svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip";
import Button from "src/components/common/Button";
import { useState } from "react";

// Define types for form inputs
interface FormData {
  firstName: string;
  lastName: string;
  designation: string;
  password: string;
  confirmPassword: string;
}

interface Step3Props {
  togglePasswordVisibility: () => void;
  showPassword: boolean;
  handleRegisterData: (data: any) => void;
}

const Step3: React.FC<Step3Props> = ({
  togglePasswordVisibility,
  showPassword,
  handleRegisterData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: "onBlur", // Validate on blur
  });

  // Watch password value for confirm password validation
  const password = watch("password", "");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleRegisterData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-6 mb-1.5">Setup Your Profile</div>
      <div className="text-2 font-thin mb-8">
        Add Your Name and Photo to Setup Your Profile
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            First Name
          </label>
          <div className="mt-2">
            <input
              id="first-name"
              type="text"
              placeholder="Enter first name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              type="text"
              placeholder="Enter last name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="designation"
            className="text-sm font-normal leading-6 text-gray-900 flex gap-[2px]"
          >
            Designation
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info width={16} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    This designation is only visible on your profile card to
                    other team members.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="mt-2">
            <input
              id="designation"
              type="text"
              placeholder="Add Your Role"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("designation", {
                required: "Designation is required",
              })}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.designation.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="password"
            className="block text-sm font-normal leading-6 text-grey-900-value flex gap-[2px]"
          >
            Password
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info width={16} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Passwords Must be a Combination of Upper-case, Lower-Case,
                    Numbers, and Special Characters.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="mt-2 relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter at least 10 characters"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 10,
                  message: "Password must be at least 10 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message:
                    "Password must include upper, lower case letters, a number, and a special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <span
              className="absolute top-[14%] right-[18px] transform translate-y-[22%] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOpen /> : <EyeClosed />}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Confirm Password
          </label>
          <div className="mt-2 relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            <span
              className="absolute top-[14%] right-[18px] transform translate-y-[22%] cursor-pointer"
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? <EyeOpen /> : <EyeClosed />}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          variant="default"
          children="Next"
          type={"submit"}
          className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 w-full "
        />
      </div>
    </form>
  );
};

export default Step3;
