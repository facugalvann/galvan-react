import { IoIosCart } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
const{ totalQuantity } = useContext(CartContext)

const quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartwidget">
            <IoIosCart className="icon-cart">
            </IoIosCart><p className="cant-cart">{ quantity >= 1 && quantity }</p>
        </Link>
    )
}
export default CartWidget