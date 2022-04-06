import React, { useEffect, useRef } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import FoodItem from '../FoodItem/FoodItem';
import {  IFoodList } from '../FoodSection';
import './foodlist.scss'

export default function FoodList({foodName,_id,products}:IFoodList) {
  const delivery = useTypedSelector((state)=>state.delivery)
  const foodItemDelivery =products.filter((x)=>x.delivery).map((x)=><li key={x._id} ><FoodItem {...x}/></li>)
  const foodItemPickUp= products.map((x)=><li key={x._id} ><FoodItem {...x}/></li>)
  const renderedFoodItem = delivery ? foodItemDelivery:foodItemPickUp

//Подчеркивание секции если она в поле зрения
  const sectionObserver= useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{  
        let sectionId = `${_id}1`
        let sectionLink=document.getElementById(sectionId)
        if(!entry.isIntersecting&&sectionLink){
          
           sectionLink.classList.remove("active-link")
          return
        }
  
        sectionLink&&sectionLink.classList.add("active-link")

      })
   
    },{
      threshold: 1
    }
  
    )
    if(sectionObserver.current){
      observer.observe(sectionObserver.current)
    }
    return ()=>{
      if(sectionObserver.current){
        observer.unobserve(sectionObserver.current)
      }
    }
//@ts-ignore
  }, [sectionObserver.current])
  



  return (
        <div className='container'>
          <div className="FoodList-container" ref={sectionObserver}>
          <h3>{foodName}</h3>
          <ul className='list-reset FoodList flex'>
          
          {renderedFoodItem}
          </ul>

          </div>
          
        </div>
  )
}