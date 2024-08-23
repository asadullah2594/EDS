import Button from "../common/Button";
import siteLogo from "../../assets/siteLogo.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info, UploadIcon } from "../../assets/svg";
import { useState } from "react";
import photoPlaceholder from "../../assets/photoplaceholder.png";

const SetupProfile = () => {
  const [step, setStep] = useState(3);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setPreview(reader?.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col justify-between    gap-[var(--spacing-10,40px)]  bg-bluee-50-value h-[100vh] ">
      <div className="flex px-8 py-8">
        <img src={siteLogo} alt="site-logo" />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[608px] p-[var(--spacing-8,32px)] flex flex-col items-center justify-center  bg-white-value rounded-xl">
          <div className="w-full">
            <div className="text-gray-600 text-1 flex justify-start">
              Step {step} of 3
            </div>

            <div className="flex gap-[4px] h-1.5 justify-between mt-2.5 mb-3">
              <div className="w-full bg-primary-value h-1.5 rounded-full"></div>
              <div
                className={`w-full  h-1.5 rounded-full ${
                  step >= 2 ? "bg-primary-value" : "bg-gray-50"
                }`}
              ></div>
              <div
                className={`w-full h-1.5 rounded-full ${
                  step === 3 ? "bg-primary-value" : "bg-gray-50"
                }`}
              ></div>
            </div>
            {step == 1 ? (
              <>
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
                        name="first-name"
                        placeholder="Enter first name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
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
                        name="last-name"
                        type="text"
                        placeholder="Enter last name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className=" text-sm font-normal leading-6 text-gray-900 flex gap-[2px] "
                    >
                      Designation
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="">
                            {" "}
                            <Info />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              This designation is only visible on your profile
                              card to other team members.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        placeholder="Add Your Role"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-normal leading-6 text-gray-900 flex gap-[2px]"
                    >
                      Password
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="">
                            {" "}
                            <Info />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Passwords Must be a Combination of Upper-case,
                              Lower-Case, Numbers, and Special Characters
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="password"
                        placeholder=" Enter at least 10 characters"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-normal leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="password"
                        placeholder="Re-enter password"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : step == 2 ? (
              <>
                <div className="text-6 mb-1.5">
                  Setup Your Company/Organization
                </div>
                <div className="text-2 font-thin mb-8">
                  This Will Be Your Display Name and Image in Your Emerald
                  Workspace
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-normal leading-6 text-gray-900"
                    >
                      Company/Organization Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        placeholder="Ex. Emerald Data Solutions"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-normal leading-6 text-gray-900"
                    >
                      Your Brand Identity/Logo Photo{" "}
                      <span className="text-1 font-light">(Optional)</span>
                    </label>
                    <div className="w-[120px] border  border-s-grey-100-1 rounded-lg overflow-hidden">
                      <img src={preview ? preview : photoPlaceholder} />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className=" flex justify-start items-center  rounded-lg border border-solid border-gray-600/25 px-6 py-3 gap-1.5 ">
                      <UploadIcon />
                      <div className="text-left">
                        <div className=" flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white  focus-within:outline-none  font-semibold  "
                          >
                            <span>Click to upload &nbsp; </span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1 font-light text-gray-400 ">
                            or drag and drop
                          </p>
                        </div>
                        <p className="text-xs leading-5 text-gray-400">
                          File size should be less then 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className=" text-sm font-normal leading-6 text-gray-900 flex gap-[2px] "
                    >
                      Industry
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        placeholder="Select Industry"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-6 mb-1.5">Let’s name your site</div>
                <div className="text-2 font-thin mb-8">
                  Your site name is part of your Emerald URL. Most people use
                  their team or company name.
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="last-name"
                      className=" text-sm font-normal leading-6 text-gray-900 flex gap-[2px] "
                    >
                      Enter Your Custom Domain Name
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="">
                            {" "}
                            <Info />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              This URL will be the unique address for you and
                              your team members to access your workspace.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        placeholder="Your-Custom-Domain-Name"
                        type="text"
                        value={"Emeralddata.io/"}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-4 placeholder:font-light"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <Button
              variant="default"
              children="Next"
              className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 w-full "
            />
          </div>
        </div>
      </div>
      <div className="mx-8 my-9 text-grey-600-value text-2 font-normal">
        © Emeralddata.io 2024
      </div>
    </div>
  );
};

export default SetupProfile;
