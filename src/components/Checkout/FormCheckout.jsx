import React from 'react'
import "./checkout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
    return (
        <form className='form-check' onSubmit={handleSubmitForm}>

            <label>Nombre Completo</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

            <label>Telefono</label>
            <input type="number" name="phone" vale={dataForm.phone} onChange={handleChangeInput} />

            <label>Email</label>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <button type="submit">Confirmar orden</button>


        </form>
    )
}

export default FormCheckout