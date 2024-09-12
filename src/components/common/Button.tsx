import React from "react";

interface ButtonProps {
  variant: "default" | "transparent";
  iconPosition?: "start" | "end";
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  bg?: string;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({
  variant,
  iconPosition,
  icon,
  children,
  onClick,
  bg,
  className,
  disabled,
  type,
}) => {
  const baseStyle =
    "px-5 py-3 max-h-[3rem] rounded-lg flex items-center  font-medium leading-4 disabled:!bg-gray-400";

  const variantStyle =
    variant === "default"
      ? `${bg === "black" ? "bg-black" : "bg-green-500 "} text-white`
      : "bg-transparent text-grey-600 border-[1px] border-transparent   ";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconPosition === "start" && icon && <span className="mr-3">{icon}</span>}
      {children}
      {iconPosition === "end" && icon && <span className="ml-3">{icon}</span>}
    </button>
  );
};

export default Button;
