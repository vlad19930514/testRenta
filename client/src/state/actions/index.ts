import {  IFoodList } from "../../components/FoodSection/FoodSection";
import { ActionType } from "../action-types";

interface searchFoodAction {
  type:ActionType.SEARCH_FOOD;
  
}
interface searchFoodSuccessAction {
  type:ActionType.SEARCH_FOOD_SUCCESS;
  payload:IFoodList[];
}
interface searchFoodErrorAction {
  type:ActionType.SEARCH_FOOD_ERROR;
  payload:string;
}

export type Action = 
  searchFoodAction
  |searchFoodSuccessAction
  |searchFoodErrorAction;
