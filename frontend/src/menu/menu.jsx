import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdOutbox } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import NewEmail from '../menu/categories/NewEmail';

export default function Menu() {
  const [isNewEmailOpen, setNewEmailOpen] = useState(false);

  const handleNewEmailClick = () => {
    setNewEmailOpen(true);
  };

  const closeNewEmail = () => {
    setNewEmailOpen(false);
  };

  return (
    <div className='flex flex-col m-10 w-1/5'>
      <div className='flex items-center hover:bg-slate-400 '>
        <FaPen />
        <button onClick={handleNewEmailClick} className='m-2'>new email</button>
      </div>

      {isNewEmailOpen && (
        <div className='w-2/4 h-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-slate-600 bg-zinc-700'>
          <NewEmail closeNewEmail={() => { setNewEmailOpen(false) }} />
        </div>
      )}

      <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><Link to="/inbox"><button className='m-2'>Inbox</button></Link></div>
      <div className='flex items-center hover:bg-slate-400'><MdOutbox /><Link to="/outbox"><button className='m-2'>outbox</button></Link></div>
      <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><Link to="/AllMail"><button className='m-2'>All mail</button></Link></div>
      <div className='flex items-center hover:bg-slate-400'><FaRegTrashCan /><Link to="/Garbage"><button className='m-2'>Garbage</button></Link></div>
    </div>
  );
}





// import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaEnvelope } from "react-icons/fa";
// import { FaPen } from "react-icons/fa6";
// import { MdOutbox } from "react-icons/md";
// import { FaRegTrashCan } from "react-icons/fa6";
// import NewEmail from '../menu/categories/NewEmail';


// export default function Menu() {

//   const handleNewEmailClick=()=>{
//     <div className='w-2/4 h-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-slate-600 bg-zinc-700'><NewEmail/></div>
//   }
//   return (
//     <div className='flex flex-col m-10 w-1/5'>
//       {/* רצון האמיתי שלנו זה לעטוף את זה בלינק כדי שככה הוא יקושר לurl הנכון */}
//           {/* <div className='flex items-center hover:bg-slate-400'><FaPen /><Link to="/newEmail"><button className='m-2'>new email</button></Link></div> */}
//           <div className='flex items-center hover:bg-slate-400 '><FaPen /><button onClick={handleNewEmailClick} className='m-2'>new email</button></div>
//           <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><Link to="/inbox"><button className='m-2'>Inbox </button></Link></div>
//           <div className='flex items-center hover:bg-slate-400'><MdOutbox /><Link to="/outbox"><button className='m-2'>outbox </button></Link></div>
//           <div className='flex items-center hover:bg-slate-400'><FaEnvelope /><Link to="/AllMail"><button className='m-2'>All mail </button></Link></div>
//           <div className='flex items-center hover:bg-slate-400'><FaRegTrashCan /><Link to="/Garbage"><button className='m-2'>Garbage</button></Link></div>          
//     </div>
//   )
// }
 