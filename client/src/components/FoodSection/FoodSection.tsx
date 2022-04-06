import React from 'react'
import FoodList from './foodList/FoodList';
import './foodSection.scss'

export interface IFood {
  foodList:IFoodList[]
}
export interface IFoodList{
    _id:string;
    foodName: string;
    products: IFoodItem[];  
}
export interface IFoodItem {
    name: string;
    price: number;
    about?: string;
    _id: string;
    img:string;
    delivery:boolean;
}



export default function FoodSection({foodList}:IFood) {

  const section =foodList.map((x)=>
  <li className='food-section-item' 
   key={x._id} id={x._id}><FoodList {...x}/></li>)

  return (
    <ul className='food-section list-reset'>
     {section}
  

      </ul>
  )
}