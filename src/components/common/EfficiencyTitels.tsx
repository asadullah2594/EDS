import React from "react";

interface EfficiencyTitelsProps {
  title: string;
  desc: string;
  isWhite?: boolean;
  marginTopMobile?: string;
  marginTopDesktop?: string;
  maxWidthH2?: string;
  maxWidtMobilehH2?: string;
}

const EfficiencyTitels = ({
  title,
  desc,
  isWhite = false,
  marginTopMobile = "mt-0",
  marginTopDesktop = "md:mt-0",
  maxWidthH2 = "w-full",
  maxWidtMobilehH2 = "w-full",
}: EfficiencyTitelsProps) => {
  const titleColorClass = isWhite ? "text-white" : "text-gray-900";
  const descColorClass = isWhite ? "text-white" : "text-gray-800";

  return (
    <div className="">
      <h2
        className={`md:text-3xl font-medium font-inter ${titleColorClass} ${maxWidtMobilehH2} text-base md:leading-8 leading-5 ${maxWidthH2} w-full`}
      >
        {title}
      </h2>
      <p
        className={`text-xs lg:text-base font-inter ${descColorClass} lg:leading-6 leading-4 max-w-[32rem] w-full ${marginTopMobile} ${marginTopDesktop}`}
      >
        {desc}
      </p>
    </div>
  );
};

export default EfficiencyTitels;
