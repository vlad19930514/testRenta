import {DeliveryType } from "../action-types";
import { ActionDelivery } from "../actions/deliveryAction";


const deliveryReducer = (
  state=true,
  action:ActionDelivery
  )=>{

switch(action.type){
  case DeliveryType.DELIVERY:
    return true

  case DeliveryType.PICKUP:
      return false
      
  default: 
    return state;
}
}
export default deliveryReducer