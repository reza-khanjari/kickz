import { useSearchParams } from "react-router";

function useQueryParam<T extends string>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = (searchParams.get(key) as T) ?? defaultValue;
  const setValue = (newValue: T) => {
    setSearchParams((prev) => {
      if (newValue === defaultValue) {
        prev.delete(key);
      } else {
        prev.set(key, newValue);
      }
      return prev;
    });
  };
  return [value, setValue];
}

export default useQueryParam;
