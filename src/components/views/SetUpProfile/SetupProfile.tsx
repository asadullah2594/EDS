import Button from "../../common/Button";
import siteLogo from "src/assets/siteLogo.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { EyeClosed, EyeOpen, Info } from "src/assets/svg";
import { useEffect, useRef } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";

const SetupProfile = ({
  showPassword,
  togglePasswordVisibility,
  step,
  handleChange,
  domain,
  TenantCheck,
  industry,
  handleRegisterData,
  handleStepTwo,
}) => {
  const inputRef = useRef(null);
  const prefix = "Emeralddata.io/";

  useEffect(() => {
    // Set initial cursor position after the prefix
    if (inputRef.current) {
      setCaretPosition(inputRef.current, prefix.length);
    }
  }, []);

  const handleFocus = () => {
    // Place cursor after the prefix when input is focused
    if (inputRef.current) {
      setCaretPosition(inputRef.current, prefix.length);
    }
  };

  const handleKeyDown = (e) => {
    const input = inputRef.current;
    if (!input) return;

    // Prevent backspace or arrow left from affecting the prefix
    if (
      // (e.key === "Backspace" && input.selectionStart <= prefix.length) ||
      e.key === "ArrowLeft" &&
      input.selectionStart <= prefix.length
    ) {
      e.preventDefault();
    }
  };

  const setCaretPosition = (ctrl, pos) => {
    // Set cursor position in the input field
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    }
  };
  const isButtonDisabled = step === 1 && !domain ? true : false;
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
                    <div className="mt-2 relative">
                      <span
                        className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 select-none text-2"
                        style={{ pointerEvents: "none" }}
                      >
                        {prefix}
                      </span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={domain}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        autoComplete="off"
                        className="block w-full pl-[calc(13ch)] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
                        style={{
                          color: "black",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : step == 2 ? (
              <Step2 industry={industry} handleStepTwo={handleStepTwo} />
            ) : (
              <Step3
                togglePasswordVisibility={togglePasswordVisibility}
                showPassword={showPassword}
                handleRegisterData={handleRegisterData}
              />
            )}
            {step < 2 && (
              <Button
                variant="default"
                children="Next"
                disabled={isButtonDisabled}
                onClick={TenantCheck}
                className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 w-full "
              />
            )}
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
