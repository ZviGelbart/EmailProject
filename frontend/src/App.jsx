import React from 'react'
import Layout from './layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
       <Route path='*' element={<Layout/>} />
    </Routes>
  )
}


