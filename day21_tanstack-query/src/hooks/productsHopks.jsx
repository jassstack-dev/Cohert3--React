import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/getProductApi";
import { useState } from "react";

export const useProductApi = ()=>{

    const [searchProducts, setSearchProducts] = useState(null)
    console.log(searchProducts)
    

    const { data, isPending, error } = useQuery({
  queryKey: ['products'],
  queryFn: productApi,
  staleTime: 10000,
});



function filterProduct(searchParams){
const filterdata = data.filter((val)=>{
  return  val.title.toLowerCase().includes(searchParams.toLowerCase())
})

setSearchProducts(filterdata)


}



return {
    data, isPending, error,filterProduct,searchProducts
}
}