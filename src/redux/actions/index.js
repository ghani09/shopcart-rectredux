import axios from "axios"
import { BUY_LAPTOP , BUY_MOBILE, FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes"


export const buymobile =() => {
      return {
        type: BUY_MOBILE
      } 
}

 export const buylaptop =() => {
    return {
      type: BUY_LAPTOP
    } 
}

export const fetchrequest = () => {
    return{
         type: FETCH_REQUEST 
    }
}
export const fetchsuccess = (user) => {
  return{
       type: FETCH_SUCCESS,
       data : user
  }
}
export const fetchfail= (error) => {
  return{
       type: FETCH_FAIL,
       data : error
  }
}
export const fetchuser = () =>{

       return function(dispatch) {
               dispatch(fetchrequest())
               axios.get('https://jsonplaceholder.typicode.com/users')
               .then(response=> {
               let user = response.data;
               dispatch(fetchsuccess(user));

               })
               .catch(error =>{
                dispatch(fetchfail(error))
               })

       }





}