import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Main from './components/Main'
import { Routes,Route } from 'react-router-dom'
import Products from './components/Products'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
    </>

  )
}

export default App