import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <div className='product-card'>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <Link to={"detail/" + product.id}>Ver mas</Link>
        </div>
    )
}

export default Item