import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    setShowItemCount(false)
  }
  return (
    <div className='item-detail'>
      <img src={product.image} alt="" />
      <div className='detail'>
      
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio:${product.price}</p>
        {
          showItemCount === true? (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          ) : (
            <Link to="/cart" >Finalizar mi compra</Link>
          )
        }
        
      </div>
    </div>
  )
}

export default ItemDetail