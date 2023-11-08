//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetaillContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greating={"listado de productos"}/>}/>
          <Route path='/category/:categoryId'  element= {<ItemListContainer/>}/>
          <Route path='/item/:itemId' element= {  <ItemDetailContainer/>} /> 
        </Routes>
        
     </BrowserRouter>
      
      
    </>
  )
}

export default App
