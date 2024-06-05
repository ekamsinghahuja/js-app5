import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import ShopCategpry from './pages/ShopCategpry'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <BrowserRouter>
       <Navbar />
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategpry category='mens'/>} />
            <Route path="/womens" element={<ShopCategpry category='womens'/>} />
            <Route path="/kids" element={<ShopCategpry category='kid'/>} />
            <Route path='/products' elements={<Product/>}/>
            <Route path=':productId' elements={<Product/>}/>
            <Route path='/cart' elements={<Cart/>}/>
            <Route path='/login' elements={<LoginSignUp/>}/>
        </Routes>
      </BrowserRouter>

      


      
    </div>
  )
}

export default App
