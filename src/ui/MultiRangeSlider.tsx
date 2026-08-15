import { useRef } from "react";
import * as Slider from "@radix-ui/react-slider";
interface MultiRangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onChange?: (values: number[]) => void;
  onCommit?: (values: number[]) => void;
}
const thumbStyle =
  "bg-black-700 shadow-[0px_2px_3px_rgba(0,0,0,0.1)] block h-5 w-5 rounded-full";

function MultiRangeSlider({
  min = 0,
  max = 300,
  step = 1,
  value = [0, 300],
  onCommit,
  onChange,
}: MultiRangeSliderProps) {
  const latestValue = useRef<number[]>(value);
  const handleValueChange = (values: number[]) => {
    latestValue.current = values;
    onChange?.(values);
  };

  return (
    <div className="flex flex-col gap-y-4 py-4">
      <Slider.Root
        className="relative flex h-5 w-full items-center"
        value={value}
        onValueChange={(values) => handleValueChange(values)}
        onValueCommit={() => onCommit?.(latestValue.current)}
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={1}
      >
        <Slider.Track className="bg-black-500/20 relative flex h-1.5 grow rounded-full">
          <Slider.Range className="bg-black-600 absolute h-full rounded-full shadow-[0px_2px_3px_rgba(0,0,0,0.1)]" />
        </Slider.Track>
        <Slider.Thumb className={thumbStyle} />
        <Slider.Thumb className={thumbStyle} />
      </Slider.Root>
      <div className="flex justify-between text-sm font-medium">
        <span>Min Price: {value[0]}$</span>
        <span>Max Price: {value[1]}$</span>
      </div>
    </div>
  );
}

export default MultiRangeSlider;
