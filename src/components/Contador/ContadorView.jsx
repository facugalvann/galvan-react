const ContadorView = ( { contador,aumentarContador } ) => {

    return (
        <div>
            <p>contador:{contador}</p>
            <button onClick={aumentarContador}>+</button>

        </div>
    )
}
export default ContadorView