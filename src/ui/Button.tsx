import type React from "react";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  className = "",
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const basicStyle: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-black-700 hover:bg-black-950   border border-white/60 text-white shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_8px_rgba(0,0,0,.5)]",
    secondary:
      " bg-black-800 hover:bg-black-900 border text-white border-white/30 shadow-[0_4px_16px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)]",
  };
  const disabledStyle = disabled
    ? "opacity-50 hover:shadow-none shadow-none hover:bg-black-800"
    : "cursor-pointer opacity-100";
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${basicStyle[variant]} ${className} ${disabledStyle} w-full flex-nowrap rounded-md px-8 font-medium uppercase transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
