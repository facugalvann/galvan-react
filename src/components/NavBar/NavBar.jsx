import "./navbar.css"
import { Link } from "react-router-dom"
import IoIosCart from "./CartWidget"
const NavBar = () => {


    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <h2>Sneakers</h2>
            </Link>
            <ul className="categories">
                <li className="category">
                    <Link to="/category/accesorios">Accesorios</Link>
                </li>
                <li className="category">
                <Link to="/category/zapatillas">Zapatillas</Link> 
                    </li>
                <li className="category">
                <Link to="/category/ropa">Ropa</Link> 
                    </li>
                {/* <li className="category">
                <Link to="/category/contacto">Contacto</Link>
                    </li>  */}
            </ul>
            <IoIosCart className="io-cart" />

        </nav>
    )
}
export default NavBar

