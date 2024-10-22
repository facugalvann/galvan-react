import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos"} />} />
          <Route path="/category/:idCategory/detail/:idProduct" element={<ItemDetailContainer />} /> 
          <Route path="/category/idCategory/:idProduct" element={<ItemDetailContainer />} /> 
        </Routes>

        
      </BrowserRouter>
    </div>
  )
}

export default App
