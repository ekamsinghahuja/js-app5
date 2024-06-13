import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import Listproduct from '../components/Listproduct'
import './admin.css'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/listproducts' element={<Listproduct/>} />
      </Routes>
    </div>
  )
}

export default Admin
