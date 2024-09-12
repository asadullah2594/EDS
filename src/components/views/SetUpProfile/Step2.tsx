import { useForm, SubmitHandler } from "react-hook-form";
import { UploadIcon } from "src/assets/svg"; // Assuming you have an UploadIcon component
import photoPlaceholder from "src/assets/photoplaceholder.png"; // Assuming a placeholder image
import Button from "src/components/common/Button";
import { useState } from "react";

interface FormData {
  companyName: string;
  logo: File; // File input will be handled as FileList
  industry: string;
  address: string;
}

interface Industry {
  id: string;
  name: string;
}

interface StepProps {
  industry: Industry[]; // Assuming industry is passed as props
  handleStepTwo: any; // Submit handler passed in as a prop
}

const Step3: React.FC<StepProps> = ({ industry, handleStepTwo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>();

  const [preview, setPreview] = useState<any>();

  // Function to handle the image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setValue("logo", e.target.files[0]); // Update form value for the logo
    }
    const logo = watch("logo"); // Watch the logo input field to preview image
    setPreview(URL.createObjectURL(logo));
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    handleStepTwo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-6 mb-1.5">Setup Your Company/Organization</div>
      <div className="text-2 font-thin mb-8">
        This Will Be Your Display Name and Image in Your Emerald Workspace
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="companyName"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Company/Organization Name
          </label>
          <div className="mt-2">
            <input
              id="companyName"
              placeholder="Ex. Emerald Data Solutions"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("companyName", {
                required: "Company name is required",
              })}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.companyName.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="logo"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Your Brand Identity/Logo Photo{" "}
            <span className="text-1 font-light">(Optional)</span>
          </label>
          <div className="w-[120px] border  border-s-grey-100-1 rounded-lg overflow-hidden">
            <img
              src={preview ? preview : photoPlaceholder}
              alt="Logo Preview"
            />
          </div>
        </div>

        <div className="col-span-full">
          <div className="flex justify-start items-center rounded-lg border border-solid border-gray-600/25 px-6 py-3 gap-1.5">
            <UploadIcon />
            <div className="text-left">
              <div className="flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white  focus-within:outline-none  font-semibold"
                >
                  <span>Click to upload &nbsp;</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    {...register("logo")}
                    onChange={handleImageChange}
                  />
                </label>
                <p className="pl-1 font-light text-gray-400">
                  or drag and drop
                </p>
              </div>
              <p className="text-xs leading-5 text-gray-400">
                File size should be less than 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="companyName"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Address
          </label>
          <div className="mt-2">
            <input
              id="address"
              placeholder="Ex. Emerald Data Solutions"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
              {...register("address", {
                required: "Address is required",
              })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="industry"
            className="block text-sm font-normal leading-6 text-gray-900"
          >
            Industry
          </label>
          <div className="mt-2">
            <select
              id="industry"
              {...register("industry", {
                required: "Industry selection is required",
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-value sm:text-sm sm:leading-6 placeholder:font-light"
            >
              {industry.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            {errors.industry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.industry.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          variant="default"
          children="Next"
          type="submit"
          className="flex justify-center items-center gap-2 px-[18px] py-[10px] self-stretch rounded-lg bg-primary-value mt-5  !font-sans font-inter-3 text-2 boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' text-white-value hover:opacity-75 w-full "
        />
      </div>
    </form>
  );
};

export default Step3;
