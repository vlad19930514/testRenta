
import { boolean } from "yup";
import { DeliveryType, NeedSubmitType } from "../action-types";

interface DeliveryAction {
  type:DeliveryType.DELIVERY;
  payload:true;
}
interface pickupAction {
  type:DeliveryType.PICKUP;
  payload:false;
}

interface NeedSubmitAction {
  type:NeedSubmitType.NEEDSUBMIT;
  payload:boolean;
}
interface onNeedSubmitAction {
  type:NeedSubmitType.ONNEEDSUBMIT;
  payload:boolean;
}


export type ActionDelivery = DeliveryAction|pickupAction|NeedSubmitAction|onNeedSubmitAction;
