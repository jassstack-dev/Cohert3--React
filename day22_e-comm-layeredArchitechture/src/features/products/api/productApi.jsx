import { api } from "../../../config/api"

export const getAllProductApis =async (search)=>{
    try {

        let  url = search ? `/products/search?q=${search}` : '/products'

        const res = await api.get(url)
        return res.data
    } catch (error) {
        console.log('error in product fetch apis', error)
    }
}

export const allProductCategories =async ()=>{
    try {
        const res = await api.get('/products/categories')
        return res.data
    } catch (error) {
        console.log('error in product fetch apis', error)
    }
}

export const productByCategories = async (categories)=>{
    try {
        const res = await api.get(`products/category/${categories}`);
        return res.data
    } catch (error) {
        console.log('error in product fetch apis', error)
    }
}