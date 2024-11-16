import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickRest = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleclickadd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className='item-count'>
            <button onClick={handleClickRest} className='button-rest'>-</button>
            <p className='count'>{count}</p>
            <button onClick={handleclickadd} className='button-sum'>+</button>
            <button onClick={ () => addProduct(count) } className='button-count'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount