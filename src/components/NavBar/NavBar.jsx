import "./navbar.css"

import IoIosCart from "./CartWidget"
const NavBar = () => {


    return (
        <nav className="navbar">
            <div className="brand">
                <h2>Sneakers</h2>
            </div>
            <ul>
                <li>Rebajas</li>
                <li>Zapatillas</li>
                <li>Ropa</li>
                <li>Contacto</li>
            </ul>
            <IoIosCart />

        </nav>
    )
}
export default NavBar
