
// import { api } from "../../../config/api"

// export const loginUserApi = async (Credentials) =>{
//     try{

// const res = await api.post('/auth/login', Credentials)
// localStorage.setItem('accessToken', res.data.accessToken)
// return res.data
//     }catch(error){
//         console.log('error in login api', error)
//     }
// }


// export const HydrateApi = async () =>{

//     let token = localStorage.getItem('accessToken')

//     try{
// const res = await api.get('/auth/me',{
//     headers: {
//     Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
//   }
// })
// console.log('response of hydration api', res)
// return res.data
//     }catch(error){
//         console.log('error in hydration api', error)
//     }
// }