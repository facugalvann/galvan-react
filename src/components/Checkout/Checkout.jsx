import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCheckout from './FormCheckout';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import db from '../../db/db.js';
import Swal from 'sweetalert2';  
import "./checkout.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });
    const [idOrder, setIdOrder] = useState(null);  
    const [loading, setLoading] = useState(false);  

    const { cart, totalPrice, deleteCart } = useContext(CartContext);
    const navigate = useNavigate();  

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        
        setLoading(true); 
        const order = {
            buyer: { ...dataForm },
            products: cart.map(product => ({ ...product })),  
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        };

        try {
            const orderId = await uploadOrder(order);  
            toast.success('¡Compra realizada con éxito!');  
            deleteCart();  
            setIdOrder(orderId);  
            setLoading(false);
        } catch (error) {
            toast.error('Hubo un error al procesar la compra. Inténtalo de nuevo.');  
            setLoading(false);
        }
    };

    const uploadOrder = async (newOrder) => {
        const ordersRef = collection(db, "orders");
        try {
            const response = await addDoc(ordersRef, newOrder);  
            return response.id;  
        } catch (error) {
            console.log("Error al subir la orden:", error);  
            throw new Error('Error al subir la orden');
        }
    };

    useEffect(() => {
        if (idOrder) {
            Swal.fire({
                title: '¡Gracias por su compra!',
                text: `Su número de orden es: ${idOrder}`,
                icon: 'success',
                confirmButtonText: 'Volver al inicio',
                background: "grey",
                color: "white",
                iconColor: "green",
                confirmButtonColor: "green",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/');  
                }
            });
        }
    }, [idOrder, navigate]);  

    return (
        <div>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />  

            {idOrder === null ? (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                    loading={loading}  
                />
            ) : (
                <div className='checkout'>
                </div>
            )}
        </div>
    );
};

export default Checkout;
