import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Contador/Contador'

import './App.css'

function App() {

  return (
    <div className='container-app'>
      
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a Sneakers!"} />


    </div>
  )
}

export default App
