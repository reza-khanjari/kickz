import { colors } from "@/ui/constants";
import type { Dispatch, SetStateAction } from "react";



interface pickColors {
  selectedColor:string;
  setSelectedColor:Dispatch<SetStateAction<string>>;
  arrayColors:string[];
}

function PickColors({
  selectedColor,
  setSelectedColor,
  arrayColors,
}: pickColors) {
  return (
    <>
      {arrayColors?.map((item) => {
        return (
          <button
            type="button"
            onClick={() => setSelectedColor(item)}
            key={item}
            style={{ backgroundColor: colors[item] }}
            className={`${selectedColor === item ? "ring-2" : ""} ring-black size-6 cursor-pointer rounded-full border-2 shadow-[0_0_3px_rgba(0,0,0,0.75)] ring-offset-2 hover:ring-2`}
          ></button>
        );
      })}
    </>
  );
}

export default PickColors;
