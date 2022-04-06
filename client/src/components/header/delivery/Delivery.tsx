import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './delivery.scss'


export default function Delivery() {
  
const {DeliverAction} = useActions()
const delivery = useTypedSelector((state)=>state.delivery)
  return (
    <div className='flex delivery'>
      <p>Доставка г. Москва</p>

      <div className="flex">
        <button className={delivery?"active-button":"off-button"}
         onClick={()=> DeliverAction(true)} >Доставка</button>

        <button className={delivery?"off-button":"active-button"}
         onClick={()=> DeliverAction(false)}>Самовывоз</button>
      </div>
      </div>
  )
}