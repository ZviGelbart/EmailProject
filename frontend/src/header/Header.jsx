import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Update from './Update';
export default function Header() {
  const handleUpdateClick = () => {
    <Update/>
    prompt("err" ,"dfgh")
  };

  return (
    <header className='h-28  flex items-center justify-around px-5 '>
        <div className='flax flex items-center'><BiLogoGmail /> <div className='m-2'>gmail</div></div>
        <div className='border border-slate-950 w-6/12 rounded-full p-2 pl-4 flex '><button><CiSearch /></button><input className='outline-none bg-slate-200 pl-4 hover:bg-slate-500' type="text" placeholder='search in emails' ></input></div>
        <div class="border border-slate-950 bg-slate-600 w-16 h-16 overflow-hidden rounded-full">
           <button onClick={handleUpdateClick}> <img class="object-cover  w-full h-full" src="11.jpeg" alt="" /></button>
        </div>
    </header>
  )
}

// import React, { useState } from 'react';
// import { BiLogoGmail } from "react-icons/bi";
// import { CiSearch } from "react-icons/ci";
// import Update from './Update';

// export default function Header() {
//   const [isUpdateOpen, setUpdateOpen] = useState(false);

//   const handleUpdateClick = () => {
//     setUpdateOpen(!isUpdateOpen);
//   };

//   return (
//     <header className='h-28  flex items-center justify-around px-5 '>
//         <div className='flax flex items-center'><BiLogoGmail /> <div className='m-2'>gmail</div></div>
//         <div className='border border-slate-950 w-6/12 rounded-full p-2 pl-4 flex '><button><CiSearch /></button><input className='outline-none bg-slate-200 pl-4 hover:bg-slate-500' type="text" placeholder='search in emails' ></input></div>
//         <div className="border border-slate-950 bg-slate-600 w-16 h-16 overflow-hidden rounded-full">
//            <button onClick={handleUpdateClick}> <img className="object-cover  w-full h-full" src="11.jpeg" alt="תמונת פרופיל" /></button>
//         </div>

//         {/* הקומפוננטה Update תוצג או תסתר על פי ערך הסטייט isUpdateOpen */}
//         {isUpdateOpen && <Update/>}
//     </header>
//   );
// }
