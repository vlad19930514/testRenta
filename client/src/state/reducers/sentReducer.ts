import { CartType } from './../action-types/index';
import { ActionCart } from '../actions/cartAction';

interface RepositoriesState {
  loading:boolean;
  error:string|null;
  data:boolean
}

const initialState = {
  loading:false,
  error:null,
  data:false
}
const sentReducer = (
  state:RepositoriesState=initialState,
  action:ActionCart
  ):RepositoriesState=>{

switch(action.type){
  case CartType.SENT:
    return {loading:true, error:null, data:false }

  case CartType.SENT_SUCCESS:
 
      return {loading:false, error:null, data:action.payload }

  case CartType.SENT_ERROR:
    return {loading:false, error:action.payload, data:false }
  default: 
    return state;
}
}
export default sentReducer