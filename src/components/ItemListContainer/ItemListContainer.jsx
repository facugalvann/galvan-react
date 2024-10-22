import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"
import { useParams } from "react-router-dom"
const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()


    useEffect(() => {
        getProducts()
            .then((data) => {
                if (idCategory){
                    const filterProducts = data.filter( (product)=> product.category === idCategory )
                    setProducts(filterProducts)
                } else {
                    setProducts(data)
                }

            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("finalizo la promesa")
            })
    }, [idCategory])


    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )

}
export default ItemListContainer