import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'  
import Rating from './components/Rating.jsx'

const FoodItem = ({id,name,description,image,price,rating}) => {
  return (
    <div className='food-item' >
        
        <img className='food-item-image' src={image} alt={name} />

        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <Rating value={rating ?? 0} />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">$ {price}</p>
        </div>
    </div>
  )
}

export default FoodItem
