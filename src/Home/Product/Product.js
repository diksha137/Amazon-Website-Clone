import React from 'react'
import './Product.css'

function Product({id,title,price,rating, image}) {  
    return (
        <>
    <div className='product'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {Array(rating)
                .fill()
                .map((_, i) => (
                <p>🌟</p>
            ))}
        </div>
        <img  className='product__img' src={image}/>
        <button className='product__button'> Add to Bakset </button>
          
    </div>
    
    </>
  )
}

export default Product
