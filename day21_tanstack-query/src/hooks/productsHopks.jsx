import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/getProductApi";

export const useProductApi = ()=>{
    const { data, isPending, error } = useQuery({
  queryKey: ['products'],
  queryFn: productApi,
  staleTime: 10000,
});

return {
    data, isPending, error
}
}