import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App
