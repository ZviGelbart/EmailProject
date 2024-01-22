import React from 'react'
import Layout from './layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import SingIn from './SingIn'
import { Link } from 'react-router-dom';
import Errorrrr from './Errorrrr'
export default function App() {
  return (
    <Routes>
       <Route path='/SingIn' element={<SingIn/>} />
       <Route path='/login' element={<Login/>} />
       {/* <Route path='*:' element={<Errorrrr/>} /> */}
       <Route path='*' element={<Layout/>} />
    </Routes>
  )
}


