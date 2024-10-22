import React from 'react'

const ItemDetail = ({ product }) => {
  return (
    <div className='item-detail'>
            <img src={product.image} alt="" />
            <div>
                <h2>{product.name}</h2>
                <p>Precio:${product.price}</p>
            </div>
        </div>
  )
}

export default ItemDetail