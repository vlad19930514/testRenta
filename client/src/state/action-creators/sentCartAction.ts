import { CartType } from "../action-types";
import { ActionCart } from "../actions/cartAction";
import { Dispatch } from 'redux'
import { IFoodItemWithQuantity } from "../reducers/cartReducer";
import axios from "axios";



export const sentCartToServer = (term:IFoodItemWithQuantity[],address:string)=>{
 
  return async (dispatch:Dispatch<ActionCart>)=>{

    dispatch({
      type:CartType.SENT
    })
    //@ts-ignore
    await axios.post('http://localhost:5003/food/sent-cart', {
        items: term,
        address
      }).then(function (response) {
        dispatch({
          type: CartType.SENT_SUCCESS,
          payload:true
        })
        dispatch({
          type: CartType.DELETE_CART,
          payload:[]
        })
      })
      .catch(function (error) {
        dispatch({
          type:CartType.SENT_ERROR,
          payload:`err ${error}`
        })
      });
  }
}

export const addAddress = (adress:string)=>{
 
  return async (dispatch:Dispatch<ActionCart>)=>{

    dispatch({
      type:CartType.ADD_ADDRESS,
      payload:adress
    })
   
  }
}