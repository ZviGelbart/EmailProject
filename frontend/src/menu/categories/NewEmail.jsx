import React, { useState } from 'react';

export default function NewEmail({ closeNewEmail }) {
  const [userData, setUserData] = useState({
    sender: '',
    destination: '',
    topic: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // closeNewEmail()
    e.preventDefault();
    // לוגיקה נוספת לשליחת הנתונים לשרת או לעדכון המצב
    console.log('Email data submitted:', userData);

    // בדיקה שכל השדות מולאו
    if (userData.sender && userData.destination && userData.topic && userData.body) {
      // לסגור את הקומפוננטה של NewEmail
      closeNewEmail();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className='flex flex-col'>
      <form>
        <button onClick={closeNewEmail}>✖️</button>
        <label htmlFor="from" className='block mb-2' >
        sender
          <input
            type="email"
            name="from"
            className='m-2'
            onChange={handleChange}
            
          />
        </label>

        <label htmlFor="to" className='block mb-2'>
        destination
          <input
            type="email"
            name="to"
            className='m-2'
            onChange={handleChange}
            
          />
        </label>

        <label htmlFor="subject" className='block mb-2 '>
        topic
          <input
            type="text"
            name="subject"
            className='m-2'
            onChange={handleChange}
            
          />
        </label>

        <label htmlFor="body" className='block mb-2'>
          body the email
          <input
            type="text"
            name="body"
            className='m-2'
            onChange={handleChange}
            
          />
        </label>

        <button
          className="bg-blue-500 text-white p-2 m-9 rounded-md"
          type="submit"
          onClick={handleSubmit}
        >
          send email
        </button>
      </form>
    </div>
  );
}





// import React, { useState } from 'react'

// export default function NewEmail({closeNewEmail}) {
//   const [userData, setUserData]=useState({})
//   return (
//     <div className='flex flex-col'>
//           <form action="">
//       <button onClick={closeNewEmail}>✖️</button>
//             <label htmlFor="" className='block mb-2' >from
//               <input type="text" className='m-2' />
//             </label>
//             <label htmlFor="" className='block mb-2'>to
//               <input type="text" className='m-2' />
//             </label>
//             <label htmlFor="" className='block mb-2 '>subject
//               <input type="text" className='m-2'/>
//             </label>
//             <label htmlFor="" className='block mb-2'>body the email
//               <input type="text" className='m-2'/>
//             </label>
//             <button onClick={closeNewEmail}
//           className="bg-blue-500 text-white p-2 m-9 rounded-md"
//           type="submit"
//         >
//           send email
//         </button>
//           </form>
//     </div>
//   )
// }
