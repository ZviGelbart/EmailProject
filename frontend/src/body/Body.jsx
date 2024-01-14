import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NewEmail from '../menu/categories/NewEmail'
import Inbox from '../menu/categories/Inbox'
import Outbox from '../menu/categories/outbox'
import AllMail from '../menu/categories/AllMail'
import Garbage from '../menu/categories/Garbage'

export default function body() {
  return (
    <div className='w-4/5 m-10'>
       <Routes>
         <Route path="/newEmail" element={<NewEmail/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/s" element={<Outbox/>}/>
        <Route path="/s" element={<AllMail/>}/>
        <Route path="/s" element={<Garbage/>}/>
        </Routes>
    </div>
  )
}
