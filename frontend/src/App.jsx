import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import SingIn from './SingIn'
import UserContext from './UserContext'
import { Link } from 'react-router-dom';
import Errorrrr from './Errorrrr'
export default function App() {
  const [user, setUser] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    navigate(!user ? '/login':'/')
  }, [user])
  return (
    <UserContext.Provider value={{ user, setUser }}>
    <Routes>
       <Route path='/SingIn' element={<SingIn/>} />
       <Route path='/login' element={<Login/>} />
       {/* <Route path='*:' element={<Errorrrr/>} /> */}
       <Route path='*' element={<Layout/>} value = {user} />
    </Routes>
    </UserContext.Provider>

  )
}


