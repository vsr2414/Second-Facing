import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext.jsx'
import FoodItem from '../FoodItem/FoodItem.jsx'

const FoodDisplay = ({ category }) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2> Top dishes near you</h2> 
      <div className = "food-display-list">
        {food_list.map((item, index) => {
            return <FoodItem key={index} id= {item._id} name={item.name} description={item.description}  image={item.image} price={item.price} rating={item.rating}/>
        })}
    </div>
    </div>
  )
}

export default FoodDisplay
