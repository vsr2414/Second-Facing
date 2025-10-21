import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,description,image,price}) => {
  return (
    <div className='food-item' >
        <div className="food-item-img-container" >
            <img className='food-item-image' src={image} alt="" />
      
    </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p> {name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
  <p className="food-item-desc">{description} </p>
  <p className="food-item-price">$ {price} </p>
    </div>
    </div>
  )
}

export default FoodItem
