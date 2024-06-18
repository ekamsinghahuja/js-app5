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
import Footer from './components/Footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='divv'>
     
      <BrowserRouter>
       <Navbar />
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<LoginSignUp/>}/>
            <Route path="/mens" element={<ShopCategpry banner = {men_banner} category='men'/>} />
            <Route path="/womens" element={<ShopCategpry banner={women_banner} category='women'/>} />
            <Route path="/kids" element={<ShopCategpry banner={kids_banner} category='kid'/>} />
            <Route path="/products" element={<Product />}>
            <Route path=":productId" element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
