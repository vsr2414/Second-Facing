import React from 'react'
import './Rating.css' // optional: add styles, or remove this line if you don't want a CSS file

const Rating = ({ value = 0, max = 5 }) => {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = []

  for (let i = 1; i <= max; i++) {
    if (i <= full) stars.push(<span key={i} className="star filled">★</span>)
    else if (i === full + 1 && half) stars.push(<span key={i} className="star half">★</span>)
    else stars.push(<span key={i} className="star">☆</span>)
  }

  return (
    <div className="rating" aria-label={`Rating ${value} of ${max}`}>
      {stars}
      <span className="rating-value" style={{ marginLeft: 6, fontSize: 12 }}>{value ? value.toFixed(1) : ''}</span>
    </div>
  )
}

export default Rating