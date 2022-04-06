import {  IFoodList } from "../../components/FoodSection/FoodSection";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface RepositoriesState {
  loading:boolean;
  error:string|null;
  data:IFoodList[]|[]
}

const initialState = {
  loading:false,
  error:null,
  data:[]
}
const reducer = (
  state:RepositoriesState=initialState,
  action:Action
  ):RepositoriesState=>{

switch(action.type){
  case ActionType.SEARCH_FOOD:
    return {loading:true, error:null, data:[] }

  case ActionType.SEARCH_FOOD_SUCCESS:
      return {loading:false, error:null, data:action.payload }

  case ActionType.SEARCH_FOOD_ERROR:
    return {loading:false, error:action.payload, data:[] }
  default: 
    return state;
}
}
export default reducer