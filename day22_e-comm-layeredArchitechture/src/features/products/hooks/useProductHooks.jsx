import { useQuery } from "@tanstack/react-query"
import { allProductCategories, getAllProductApis, productByCategories } from "../api/productApi"
import { useEffect, useState } from "react"

export const useAllProducts = ()=>{

    const [search, setSearch] = useState('')
    const [debounceSearch, setDebounceSearch] = useState(null)
    
    useEffect(()=>{

        let timeout = setTimeout(()=>{
            setDebounceSearch(search)
        },1000)

        return () => clearTimeout(timeout)

    },[search])
  

    const {data, isPending, error} = useQuery({
        queryKey:['products', debounceSearch],
        queryFn: ()=> getAllProductApis(debounceSearch)
    })


    // console.log('products data', data)

    return {
        data, isPending,error, search, setSearch
    }
}

export const useAllCategories = ()=>{
    return useQuery({
        queryKey:['AllCategories'],
        queryFn: allProductCategories

    })
}   

export const useProductByCategories = ()=>{

    const [categories, setCategories] = useState(null)
    //  console.log('PRODUCT BY CATEGORIES---->',categories)

    const {data} = useQuery({
        queryKey:['productByCatgeory', categories],
        queryFn: ()=>productByCategories(categories)
    })

    return{
        data, categories, setCategories
    }
} 

