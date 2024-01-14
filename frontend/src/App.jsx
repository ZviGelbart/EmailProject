import React from 'react'
import Layout from './layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import NewEmail from './menu/categories/NewEmail'
// import Inbox from './menu/categories/Inbox'
// import Outbox from './menu/categories/outbox'
// import AllMail from './menu/categories/AllMail'
// import Garbage from './menu/categories/Garbage'
export default function App() {
  return (
    <Routes>
       <Route path='*' element={<Layout/>} />
       {/* <Route path="/g" element={<NewEmail/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/s" element={<Outbox/>}/>
        <Route path="/s" element={<AllMail/>}/>
        <Route path="/s" element={<Garbage/>}/> */}
    </Routes>
  )
}


