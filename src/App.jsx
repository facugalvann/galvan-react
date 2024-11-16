import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme='dark'/>

          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos"} />} />
            <Route path="/category/:idCategory/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/category/idCategory/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
