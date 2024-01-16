import React from 'react'
import Header from './header/Header'
import Menu from './menu/Menu'
import Body from './body/body'
export default function Layout() {
  return (
    <div className='bg-slate-200 min-h-screen '>
      <Header/>
      <div className='flex justify-between '> 
          <Menu/>
          <Body/>
      </div>
    </div>
  )
}

