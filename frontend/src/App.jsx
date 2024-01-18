import React from 'react'
import Layout from './layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import SingIn from './SingIn'

export default function App() {
  return (
    <Routes>
       <Route path='/SingIn' element={<SingIn/>} />
       <Route path='/Login' element={<Login/>} />
       <Route path='*' element={<Layout/>} />
    </Routes>
  )
}


