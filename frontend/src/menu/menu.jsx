import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdOutbox } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
export default function menu() {
  return (
    <div className='flex flex-col m-10 w-1/5'>
          <div className='flex items-center hover:bg-slate-400'><FaPen /><button className='m-2'>new email</button></div>
          <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><button className='m-2'>Inbox </button></div>
          <div className='flex items-center hover:bg-slate-400'><MdOutbox /><button className='m-2'>outbox </button></div>
          <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><button className='m-2'>All mail </button></div>
          <div className='flex items-center hover:bg-slate-400'><FaRegTrashCan /><button className='m-2'>Garbage</button></div>
    </div>
  )
}
