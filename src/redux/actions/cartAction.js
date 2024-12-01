import axios from "axios";
import { ADD_TO_CART, ADD_TO_CART_ERROR, DEC_QUANTITY, EMPTY_CART, INC_QUANTITY, REMOVE_FROM_CART } from "../actionTypes";


const URL = "https://backend-flip.onrender.com";
export const addToCart = (id)=>async(dispatch)=>{
    try{
     const {data} = await axios.get(`${URL}/product/${id}`)
      dispatch({type:ADD_TO_CART, payload:{...data}})

    }catch(err){
   dispatch({type: ADD_TO_CART_ERROR, payload:err.message})
    }
}

export const removeFromCart = (id)=>async(dispatch)=>{
    dispatch({type:REMOVE_FROM_CART, payload:id})
}

export const incrementQuantity = (id)=>async(dispatch)=>{
    dispatch({type:INC_QUANTITY, payload:id})
}

export const decrementQuantity = (id)=>async(dispatch)=>{
    dispatch({type:DEC_QUANTITY, payload:id})
}



export const emptyCart = () => {
  return { type: EMPTY_CART };
};