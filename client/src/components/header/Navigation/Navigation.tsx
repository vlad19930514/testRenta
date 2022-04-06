import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './navigation.scss'


export default function Navigation() {
  const data = useTypedSelector((state)=>state.food.data)
  // id у ссылки для подчеркивая.
  const categories = data.map((x)=><li   key={x._id}>
    <a  id={`${x._id}1`} href={`#${x._id}`}>{x.foodName}</a>
    </li> )
  return (
 
  <ul className='flex navigation list-reset' >
      {categories}
    </ul>

  
  )
}