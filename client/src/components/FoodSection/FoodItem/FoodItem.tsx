import React, { useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import LazyImage from '../../LazyImage/LazyImage'
import { IFoodItem } from '../FoodSection'
import './foodItem.scss'
import MinIcon from './minIcon'
import PlusIcon from './plus-icon'
import WhitePlusIcon from './whitePlus'


export default function FoodItem(props:IFoodItem ) {

  const {AddAction,DeleteAction} = useActions()
  const cartItem=useTypedSelector((state)=>state.cart.products)
  const [openButton, setOpenButton] = useState(false)
  const [quantity, setQuantity] = useState(0)

  // Обновление кнопок и количества при отправки корзины
  if(cartItem[0]===undefined){
    openButton&&setOpenButton(false)
    quantity >0&& setQuantity(0)
  }
  // Проверка подписи Новое или Хит для стилизации
  const aboutHit= props.about==='Хит'?'aboutHit':''

  //добавление и удаление в стор корзины + отображение количества
 const add = ()=>{
  setQuantity(quantity+1)
  //@ts-ignore
   AddAction(props)
 }

 const del = ()=>{
  //@ts-ignore
  DeleteAction(props)
  if(quantity===1){
    setOpenButton(false)
  }
  setQuantity(quantity-1)
 }

  return(
    <div className='foodItem column'>
       <LazyImage  src={props.img}   />
       <h4>   {props.name}</h4>
   <span className='foodItem-price'>{props.price}₽</span>
      
      {props.about&&
      <span className={`about ${aboutHit}`}> {props.about}</span>}
     
     {!openButton&&
      <button className='foodItem-plus-button' onClick={()=>{setOpenButton(true); add()}}>
       <PlusIcon />
     </button>}
     
   
     {openButton&&
     <div className="foodItem-buttons flex">
        <button onClick={()=>del()}> <MinIcon/></button>
        <span>{quantity}</span>
        <button onClick={()=>add()}> <WhitePlusIcon/></button>
     </div>}
     
      </div>
  )
}