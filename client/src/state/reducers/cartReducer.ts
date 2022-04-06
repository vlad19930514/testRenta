import { IFoodItem } from "../../components/FoodSection/FoodSection";
import {CartType } from "../action-types";
import { ActionCart } from "../actions/cartAction";

export interface IFoodItemWithQuantity extends IFoodItem{
  quantity: number;
}

interface ICartState {
  loading:boolean;
  error:string|null;
  adress?:string;
  products:IFoodItemWithQuantity[]|[]
}

const initialState = {
  loading:false,
  error:null,
  adress:'',
  products:[] 
}

const cartReducer = (
  state:ICartState=initialState,
  action:ActionCart
  ):ICartState=>{

switch(action.type){
  case CartType.ADD: 
  let newArr:IFoodItemWithQuantity[] =state.products
  let newPayload:IFoodItemWithQuantity={...action.payload}
  //если есть добавим +1 к количеству 
  let haveSome= state.products.find((x)=>{
  let findItem =x._id=== action.payload._id
  if(findItem){
    x.quantity+=1
  }
  return findItem
  })
  //если нет создадим новый
  if(!haveSome){
  newPayload.quantity=1
  newArr.push(newPayload)
  }
  return {loading:false, error:null, products:newArr, adress:state.adress }

  case CartType.DELETE:
    let newArrDel:IFoodItemWithQuantity[] =state.products
    //если есть уберем -1 
    newArrDel= newArrDel.filter((x)=>{
      let needDel =true
      if(x._id===action.payload._id){
        if(x.quantity>1){
          x.quantity-=1
        }else{
          //удалит если меньше 1
          needDel=false
        }
      }
      return needDel
    }
    )
    return {loading:false, error:null, products:newArrDel, adress:state.adress }
    case CartType.DELETE_CART:
    
      return {loading:false, error:null, products:[], adress:state.adress}
   
  
    case CartType.ADD_ADDRESS:
      return {loading:false, error:null, adress:action.payload, products:state.products }
  default: 
    return state;
}
}
export default cartReducer




