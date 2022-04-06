

import { DeliveryType,CartType } from "../action-types";
import { IFoodItemWithQuantity } from "../reducers/cartReducer";

interface DeliveryAction {
  type:DeliveryType.DELIVERY;
  payload:true;
}
interface pickupAction {
  type:DeliveryType.PICKUP;
  payload:false;
}
export type ActionDelivery = DeliveryAction|pickupAction;

interface addIntoCartAction {
  type:CartType.ADD;
  payload:IFoodItemWithQuantity;
}
interface deleteFromCartAction {
  type:CartType.DELETE;
  payload:IFoodItemWithQuantity;
}
interface deleteCartAction {
  type:CartType.DELETE_CART;
  payload:[];
}
interface sentCartAction {
  type:CartType.SENT;
}
interface sentSuccessAction {
  type:CartType.SENT_SUCCESS;
  payload:boolean;
}
interface sentErrorAction {
  type:CartType.SENT_ERROR;
  payload:string;
}
interface addAddressAction {
  type:CartType.ADD_ADDRESS;
  payload:string;
}

export type ActionCart = addIntoCartAction|
deleteFromCartAction|
deleteCartAction|
addAddressAction|
sentCartAction|
sentSuccessAction|
sentErrorAction;
