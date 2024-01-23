import React, { useContext, useState } from 'react';
import UserContext from "../../UserContext";

export default function NewEmail({ closeNewEmail }) {
  const [userData, setUserData] = useState({
    destinations: [],
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

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailData = {
      destinations: userData.destinations.split(','), // פיצוץ המחרוזת למערך
      topic: userData.topic,
      body: userData.body,
    };
    
    emailData.destinations.forEach(destination  => {
      
    fetch('http://localhost:8200/emails/', {
      method: 'POST',
      headers: { 
        'Authorization': "Bearer " + user.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinations: [destination.trim()],
        topic: emailData.topic,
        body: emailData.body,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email data submitted:', data);
      if (userData.destinations && userData.topic && userData.body) {
        closeNewEmail();
      } else {
        alert('Please fill in all required fields.');
      }
    })
    .catch(error => console.error('Error:', error));
  });
    }
  return (
    <div className='flex flex-col' >
      <form>
        <button onClick={closeNewEmail}>✖️</button>

        <label htmlFor="to" className='block mb-2'>
          destination
          <input
            type="email"
            name="destinations"
            className='m-2'
            onChange={handleChange}
          />
        </label>

        <label htmlFor="subject" className='block mb-2'>
          topic
          <input
            type="text"
            name="topic"
            className='m-2'
            onChange={handleChange}
          />
        </label>

        <label htmlFor="body" className='block mb-2'>
          body
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
