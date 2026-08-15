import MultiRangeSlider from "@/ui/MultiRangeSlider";
import {  useState } from "react";
import { useSearchParams } from "react-router";

const PRICE_BOUNDS = { min: 0, max: 300 } as const;
function parsePriceFormParams(params: URLSearchParams): [number, number] {
  const clamp = (num: number) =>
    Math.min(Math.max(num, PRICE_BOUNDS.min), PRICE_BOUNDS.max);
  const rawMin = params.get("min_price");
  const rawMax = params.get("max_price");
  const min =
    rawMin !== null && Number.isFinite(Number(rawMin))
      ? clamp(Number(rawMin))
      : PRICE_BOUNDS.min;
  const max =
    rawMax !== null && Number.isFinite(Number(rawMax))
      ? clamp(Number(rawMax))
      : PRICE_BOUNDS.max;

  return [Math.min(min, max), Math.max(min, max)];
}

function PriceRange() {
  const [searchParams, setSearchParams] = useSearchParams();
  const priceRange = parsePriceFormParams(searchParams);
  const [pendingRange, setPendingRange] = useState<number[]>(priceRange);
  const handlePriceCommit = ([min, max]: number[]) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (min === PRICE_BOUNDS.min) next.delete("min_price");
        else next.set("min_price", String(min));
        if (max === PRICE_BOUNDS.max) next.delete("max_price");
        else next.set("max_price", String(max));
        return next;
      },
      { replace: true },
    );
  };


  return (
    <MultiRangeSlider
      step={1}
      value={pendingRange}
      min={PRICE_BOUNDS.min}
      max={PRICE_BOUNDS.max}
      onChange={setPendingRange}
      onCommit={handlePriceCommit}
    />
  );
}

export default PriceRange;
