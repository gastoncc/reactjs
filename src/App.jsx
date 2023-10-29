//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetaillContainer'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
        <ItemListContainer greating={Bievenido}/>
        <ItemDetailContainer/>
      </div>
    </>
  )
}

export default App
