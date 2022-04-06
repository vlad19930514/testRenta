import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import deliveryReducer from './deliveryReducer'
import needSubmitDelivery from './needSubminReducer'
import repositoriesReducer from './repositoriesReducer'
import sentReducer from './sentReducer'

const reducers = combineReducers({
  food:repositoriesReducer,
  delivery:deliveryReducer,
  needSubmitDelivery,
  cart:cartReducer,
  sentReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>