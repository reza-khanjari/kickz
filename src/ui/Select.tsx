import useClickOutside from "@/hooks/useClickOutside";
import React, {
  useRef,
  useState,
} from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";

interface Option {
  label: string;
  value: string;
  dir: string;
}
interface SelectProps {
  options: Option[];
  placeholder: string;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}
function Select({
  options,
  placeholder = "",
  selectedOption,
  setSelectedOption,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false),
  );

  return (
    <div ref={selectRef} className="relative">
      <button
        className="mx-auto flex cursor-pointer items-center justify-center gap-x-1 md:gap-x-2"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          {selectedOption
            ? options.find((item) => item.value === selectedOption)?.label
            : placeholder}
        </div>
        <FaSortAmountDownAlt />
      </button>

      <div
        className={`${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} absolute top-full grid min-w-48 -translate-x-1/3 translate-y-2 rounded-lg bg-[#fcfcfc] shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all`}
      >
        <div className="overflow-hidden">
          <ul className="flex w-full flex-col rounded-lg border border-black/10">
            {options.map((option) => (
              <li
                className="cursor-pointer px-6 py-1 transition-colors first:pt-2 last:pb-2 hover:bg-[#f7f7f7]"
                key={option.value}
                onClick={() => {
                  setSelectedOption(option.value);
                  setIsOpen(false);
                }}
              >
                <span className="text-sm font-medium">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;
