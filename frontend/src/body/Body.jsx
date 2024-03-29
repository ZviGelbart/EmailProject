import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NewEmail from '../menu/categories/NewEmail';
import Inbox from '../menu/categories/Inbox';
import Outbox from '../menu/categories/outbox';
import AllMail from '../menu/categories/AllMail';
import Garbage from '../menu/categories/Garbage';

export default function Body() {
  return (
    <div className='w-4/5 m-10'>
      <Routes>
        <Route
          path='/inbox'
          element={
            <div className='h-screen overflow-y-auto'>
              <Inbox />
            </div>
          }
        />
        <Route
          path='/Outbox'
          element={
            <div className='h-screen overflow-y-auto'>
              <Outbox />
            </div>
          }
        />
        <Route
          path='/AllMail/'
          element={
            <div className='h-screen overflow-y-auto'>
              <AllMail />
            </div>
          }
        />
        <Route
          path='/garbage'
          element={
            <div className='h-screen overflow-y-auto'>
              <Garbage />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
