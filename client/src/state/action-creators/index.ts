import { ActionCart } from './../actions/cartAction';
import { DeliveryType, CartType, NeedSubmitType} from './../action-types/index';
import axios from 'axios'
import { Dispatch } from 'redux'
import {  IFoodList } from '../../components/FoodSection/FoodSection'
import { ActionType } from '../action-types'
import {Action} from '../actions'
import { ActionDelivery } from '../actions/deliveryAction';
import { IFoodItemWithQuantity } from '../reducers/cartReducer';
export  * from'./sentCartAction'


interface IFoodResp {
  data:IFoodList[]
}
export const searchFood = ()=>{
  return async (dispatch:Dispatch<Action>)=>{
    dispatch({
      type:ActionType.SEARCH_FOOD
    })

    try {
      const {data}:IFoodResp = await axios.get('/food')
const res = data.map((result)=>{ return result})
dispatch({
  type: ActionType.SEARCH_FOOD_SUCCESS,
  payload:res
})
    } catch (err){
      console.log(err)
      dispatch({
        type:ActionType.SEARCH_FOOD_ERROR,
        payload:`err ${err}`
      })
    }
  }
}

export const DeliverAction = (e:boolean)=>{
  return async (dispatch:Dispatch<ActionDelivery>)=>{
    if(e){
      dispatch({
        type:DeliveryType.DELIVERY,
        payload:true
      })
    }else{
      dispatch({
        type:DeliveryType.PICKUP,
        payload:false
      })
    }
  }
}
export const needSubmitAction = (e:boolean)=>{
  return async (dispatch:Dispatch<ActionDelivery>)=>{
    if(e){
      dispatch({
        type:NeedSubmitType.ONNEEDSUBMIT,
        payload:true
      })
     
    }else{
      dispatch({
        type:NeedSubmitType.NEEDSUBMIT,
        payload:false
      })
    }
  }
}

export const AddAction = (e:IFoodItemWithQuantity)=>{
  return async (dispatch:Dispatch<ActionCart>)=>{
    if(e){
      dispatch({
        type:CartType.ADD,
        payload:e
      })
    }
  }
}

export const DeleteAction = (e:IFoodItemWithQuantity)=>{
  return async (dispatch:Dispatch<ActionCart>)=>{
    if(e){
      dispatch({
        type:CartType.DELETE,
        payload:e
      })
    }
  }
}
export const DeleteCartAction = ()=>{
  return async (dispatch:Dispatch<ActionCart>)=>{
      dispatch({
        type:CartType.DELETE_CART,
        payload:[]
      })
 
  }
}

