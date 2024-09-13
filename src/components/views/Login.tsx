import siteLogo from "../../assets/siteLogo.svg";
import Button from "../common/Button";
import Slide1 from "../../assets/slides/slide1.png";
import Slide2 from "../../assets/slides/slide2.png";
import Slide3 from "../../assets/slides/slide3.png";
import Slide4 from "../../assets/slides/slide4.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const images = [Slide1, Slide2, Slide3, Slide4];
interface FormData {
  email: string;
  password: string;
}

const Login = ({ handleLogin }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data) => {
    handleLogin(data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between gap-[var(--spacing-10,40px)] bg-bluee-50-value h-[100vh]">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex px-8 py-8">
          <img src={siteLogo} alt="site-logo" />
        </div>

        <div className="w-full flex items-center flex-col justify-center">
          <div className="min-w-[464px]">
            <p className="text-[var(--color-gray-950,#030712)] text-left font-sans leading-[var(--font-line-height-10,40px)] tracking-[var(--font-letter-spacing-wide,0.2px)] text-3xl font-light">
              Welcome Back to <span className="text-[#009875]">Emerald!</span>
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 ${
                      errors.email ? "ring-red-500" : ""
                    }`}
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 ${
                      errors.password ? "ring-red-500" : ""
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-primary-value hover:text-primary-value"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  variant="default"
                  type="submit"
                  className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5 !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 w-full"
                >
                  Log In
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-8 my-9 text-grey-600-value text-2 font-normal">
          © Emeralddata.io 2024
        </div>
      </div>

      <div className="flex-1 py-5 md:hidden lg:block h-full w-full">
        <div className="relative w-full max-w-2xl mx-auto h-full">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
