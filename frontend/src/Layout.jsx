import React from 'react'
import Header from './header/Header'
import Menu from './menu/menu'
import Body from './body/Body'
export default function Layout() {
  return (
    <div className='bg-slate-200 w-screen '>
      <Header/>
      {/* h-max */}
      <div className='flex justify-between '> 
          <Menu/>
          <Body/>
      </div>
    </div>
  )
}

