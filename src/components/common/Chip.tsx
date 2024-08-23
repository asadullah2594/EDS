import React from "react";

interface ChipProps {
  text: string;
  bgColor?: "green" | "white";
}

const Chip = ({ text, bgColor = "green" }: ChipProps) => {
  const bgClass = bgColor === "green" ? "bg-green-500" : "bg-white";
  const textColor = bgColor === "green" ? "text-white" : "text-gray-700";

  return (
    <div
      className={`${bgClass} px-2 py-2 md:px-3 md:py-2 flex rounded-[3.125rem] max-w-max  `}
    >
      <span
        className={`text-8xl md:text-xs leading-4 md:leading-5 ${textColor} font-normal font-inter`}
      >
        {text}
      </span>
    </div>
  );
};

export default Chip;
