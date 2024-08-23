import siteLogo from "../../assets/siteLogo.svg";
const AlmostThere = () => {
  return (
    <div className="flex flex-col justify-between    gap-[var(--spacing-10,40px)]  bg-bluee-50-value h-[100vh] ">
      <div className="flex px-8 py-8">
        <img src={siteLogo} alt="site-logo" />
      </div>

      <div className="w-full flex-col flex items-center justify-center">
        <div className="text-7 mb-3">Almost There!</div>
        <div className="text-grey-600-value font-light">
          We’re setting up your organization.If you don’t get it within a few
          minutes,{" "}
        </div>
        <div className="text-grey-600-value font-light">
          please reach out to us at &nbsp;
          <span className="text-primary-value font-medium">
            Support@emerald.io.
          </span>
        </div>
      </div>
      <div className="mx-8 my-9 text-grey-600-value text-2 font-normal">
        © Emeralddata.io 2024
      </div>
    </div>
  );
};

export default AlmostThere;
