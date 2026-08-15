import { useCallback } from "react";
import { useSearchParams } from "react-router";

function useMultiQueryParam(key: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedValues = searchParams.getAll(key);
  const setSelectedValues = useCallback(
    (values:string[]) => {
      setSearchParams(
        (prev) => {
          prev.delete(key);
          values.forEach((v) => prev.append(key, v));
          return prev;
        },
        { replace: true },
      );
    },
    [key, setSearchParams],
  );

  return { selectedValues, setSelectedValues };
}

export default useMultiQueryParam;
