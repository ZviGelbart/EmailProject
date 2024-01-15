import React from 'react'
import Layout from './layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'

export default function App() {
  return (
    <Routes>
       <Route path='/Login' element={<Login/>} />
       <Route path='*' element={<Layout/>} />
    </Routes>
  )
}


