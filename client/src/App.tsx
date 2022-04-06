
import React, { useEffect } from 'react';
import './scss/normalize.css'
import './App.scss';
import './scss/media.scss'
import {Header} from './components/header/Header';
import FoodSection from './components/FoodSection/FoodSection';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import Navigation from './components/header/Navigation/Navigation';
import Cart from './components/header/cart/Cart';
import Delivery from './components/header/delivery/Delivery';
import DeliveryAdress from './components/header/deliveryAdress/DeliveryAdress';



function App() {

const {searchFood} = useActions()
useEffect(() => {
  searchFood()
}, []) // eslint-disable-line react-hooks/exhaustive-deps

const data = useTypedSelector((state)=>state.food)
const delivery = useTypedSelector((state)=>state.delivery)

  return (
    <>
      <Header >
        <Cart/>
        <Delivery/>
        {delivery&&<DeliveryAdress/>}
      </Header>

      <Navigation/>

       <FoodSection foodList={data.data} />
    </>
    
  );
}


export default App;
