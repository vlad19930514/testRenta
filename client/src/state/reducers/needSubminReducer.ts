

import { NeedSubmitType } from "../action-types";
import { ActionDelivery } from "../actions/deliveryAction";


const needSubmitDelivery = (
  state=false,
  action:ActionDelivery
  )=>{

switch(action.type){
  case NeedSubmitType.NEEDSUBMIT:
    return false

  case NeedSubmitType.ONNEEDSUBMIT:
      return true
      
  default: 
    return state;
}
}
export default needSubmitDelivery