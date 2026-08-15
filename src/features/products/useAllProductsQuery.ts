import { getAllProducts } from "./getAllProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
import {  useSearchParams } from "react-router";

export function useAllProducts() {
  const [searchParams] = useSearchParams();
  const minPrice = Number(searchParams.get("min_price")) || 0;
  const maxPrice = Number(searchParams.get("max_price")) || 300;
  const audiences = searchParams.getAll("au").map((id) => Number(id));
  const brands = searchParams.getAll("br").map((id) => Number(id));
  const sort = searchParams.get("sort") || "";
  const query = useInfiniteQuery({
    queryKey: ["products", audiences, minPrice, maxPrice, brands, sort],
    queryFn: ({ pageParam = 0 }) =>
      getAllProducts({
        audiences,
        minPrice,
        maxPrice,
        brands,
        pageParam,
        sort,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loadedItems = allPages.flatMap((item) => item.data).length;
      return loadedItems < (lastPage.count ?? 0) ? allPages.length : undefined;
    },
  });
  return query;
}