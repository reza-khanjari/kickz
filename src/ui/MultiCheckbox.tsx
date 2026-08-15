interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface MultiCheckboxProps {
  options: Option[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  name?: string;
}

function MultiCheckbox({
  options,
  selectedValues,
  onChange,
  name = "multicheckbox",
}: MultiCheckboxProps) {
  const toggle = (value: string) => {

    
    if (selectedValues?.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };
  return (
    <div className="flex flex-col gap-y-2 pb-4 pl-1 ">
      {options.map((option) => {
        const checked = selectedValues.includes(option.value);
        return (
          <label
            className="flex items-center cursor-pointer gap-x-2"
            key={option.value}
          >
            <div
              className={`size-3 rounded-full  ring-1 ring-offset-2 ${checked ? "bg-black-600 ring-black" : ""}`}
            ></div>
            <input
              className="hidden"
              type="checkbox"
              name={name}
              checked={checked}
              value={option.value}
              disabled={option.disabled}
              onChange={() => toggle(option.value)}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}

export default MultiCheckbox;
