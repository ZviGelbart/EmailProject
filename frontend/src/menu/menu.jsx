import React from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdOutbox } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
export default function Menu() {
  return (
    <div className='flex flex-col m-10 w-1/5'>
      {/* רצון האמיתי שלנו זה לעטוף את זה בלינק כדי שככה הוא יקושר לurl הנכון */}
          <div className='flex items-center hover:bg-slate-400'><FaPen /><Link to="/newEmail"><button className='m-2'>new email</button></Link></div>
          <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><Link to="/inbox"><button className='m-2'>Inbox </button></Link></div>
          <div className='flex items-center hover:bg-slate-400'><MdOutbox /><Link to="/outbox"><button className='m-2'>outbox </button></Link></div>
          <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><Link to="/AllMail"><button className='m-2'>All mail </button></Link></div>
          <div className='flex items-center hover:bg-slate-400'><FaRegTrashCan /><Link to="/Garbage"><button className='m-2'>Garbage</button></Link></div>
          
    </div>
  )
}
 