import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <header className='h-28  flex  items-center justify-around px-5 '>
        <div className='flax flex items-center'><BiLogoGmail /> <div className='m-2'>gmail</div></div>
        <div className='border border-slate-950 w-6/12 rounded-full p-2 pl-4 flex '><button><CiSearch /></button><input className='outline-none bg-slate-200 pl-4 hover:bg-slate-500' type="text" placeholder='search in emails' ></input></div>
        <div className='border border-slate-950 h-14 rounded-full overflow-hidden'><button><img src="1.jpg" alt="" className='h-14'/></button></div>
    </header>
  )
}
