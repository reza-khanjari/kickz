import type React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({
  label,
  error,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      {label && (
        <label className="text-sm text-white/75" >
          {label}
        </label>
      )}
      <input
        className={`bg-black-700 auto w-full rounded-lg border border-white/60 px-4 py-2 text-white outline-transparent hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)] focus:shadow-[0_4px_16px_rgba(255,255,255,0.1)] ${className}`}
        {...props}
      />
      {error ? (
        <p className="my-1 rounded-md border border-[#FF4D4F] bg-[#2A1215] py-1.5 pl-4 text-sm text-[#FF4D4F]">
          {error}
        </p>
      ) : (
        <p className="text-sm text-transparent">&nbsp;</p>
      )}
    </div>
  );
};
export default Input;
