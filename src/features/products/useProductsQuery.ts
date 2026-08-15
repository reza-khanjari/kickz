import {  useQuery } from "@tanstack/react-query";
import {  getProduct } from "./getProductById";
import { useParams } from "react-router";
import toast from "react-hot-toast";


export function useGetProduct() {
  const params = useParams();

  const productId = params.productId ? Number(params.productId) : null;
  if (!productId) {
    throw new Error("Product Id not found");
  }
  const { data, isLoading, error } = useQuery({
    queryKey: [`product`, productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId,
  });
  if (error) {
    toast.error(error.message);
    throw new Error(error.message);
    
  }

  return { data, isLoading };
}
