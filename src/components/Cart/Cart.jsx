import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./cart.css";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className='cart-empty'>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className='div-cart'>
            <h2>Mi carrito</h2>
            {cart.map((productCart) => (
                <div key={productCart.id} className='product-cart'>
                    <img src={productCart.image} width={200} alt="" />
                    <p>{productCart.name}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio c/u: ${productCart.price}</p>
                    <p>Precio total: ${productCart.quantity * productCart.price}</p>


                    <button
                        onClick={() => {
                            Swal.fire({
                                title: '¿Estás seguro?',
                                text: "Este producto será eliminado del carrito.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Sí, eliminar',
                                cancelButtonText: 'Cancelar',
                                showLoaderOnConfirm: true,
                                background: "grey",
                                color: "white",
                                cancelButtonColor: '#dc3545',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    deleteProductById(productCart.id);
                                    Swal.fire(
                                        'Eliminado!',
                                        'El producto ha sido eliminado del carrito.',
                                        'success'
                                    );
                                }
                            });
                        }}
                        className='delete-product'
                    >
                        Eliminar producto
                    </button>
                </div>
            ))}


            <p className='precio-total'>Precio total: ${totalPrice()}</p>


            <button
                onClick={() => {
                    if (cart.length === 0) {
                        Swal.fire(
                            'Carrito vacío!',
                            'No hay productos para eliminar.',
                            'info'
                        );
                        return;
                    }

                    Swal.fire({
                        title: '¿Estás seguro?',
                        text: "¿Deseas vaciar todo el carrito?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sí, vaciar carrito',
                        cancelButtonText: 'Cancelar',
                        background: "grey",
                        color: "white",
                        cancelButtonColor: '#dc3545',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            deleteCart();
                            Swal.fire(
                                'Carrito vaciado!',
                                'Todos los productos han sido eliminados.',
                                'success'
                            ).then(() => {
                                navigate('/');
                            });
                        }
                    });
                }}
                className='delete-cart'
                disabled={cart.length === 0}
            >
                Vaciar carrito
            </button>


            <Link to="/checkout">Finalizar mi compra</Link>
        </div>
    );
};

export default Cart;
