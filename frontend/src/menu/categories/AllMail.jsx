import React from 'react'

export default function AllMail() {
  return (
    <div>AllMail</div>
  )
}

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// export default function AllMail() {
//   const [mes, setMes] = useState([]);
//   const {emailName} = useParams()

//   useEffect(() => {
//     fetch("http://localhost:8200/emails/outbox/"+emailName)
//       .then((f) => f.json())
//       .then((data) => {
//         setMes(data);
//       });
//   }, []);

//   const formatTime = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };

//   return (
//     <div>
//       <div className=" flex justify-center text-2xl">outbox</div>
//       {mes.map((email) => (
//         <div key={email._id} className="flex justify-between border border-slate-950 p-2 h-10 hover:bg-slate-400 overflow-hidden">
//           <button className="flex  justify-between w-full ">
//             <div className="">{email.sender.email}</div>
//             <div className="">{email.body}</div>
//             <div className="">{formatTime(email.date)}</div>
//             <button className="ml-7 hover:bg-gray-500  ">🗑️</button>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

