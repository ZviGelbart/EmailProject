import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(userEmail);

    if (isEmailValid && password) {
      try{
        const response = await fetch('http://localhost:8200/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: userEmail, password }),
        });
         // טפל בתגובה מהשרת
         if (response.ok) {
          // הפנה ל-AllMail בעת הצלחה בהתחברות
      window.location.href = '/AllMail';
      } else {
        const errorData = await response.json();
        console.log('שגיאה מהשרת:', errorData.message);
      }
    } catch (error) {
      console.error('שגיאה בשליחת נתונים לשרת:', error);

      }
    } else {
      setEmailError('Invalid email format');
      console.log('ERROR: Please fill in all fields correctly');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login to the System</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
              Email Address
            </label>
            <input
              className={`w-full p-2 border rounded-md ${emailError ? 'border-red-500' : ''}`}
              type="text"
              id="userEmail"
              name="userEmail"
              placeholder="Enter Your email address"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                setEmailError(''); 
              }}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-between'>
          <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
            Login
          </button>
         <div className='text-blue-600'><Link to="/SingIn">sing in</Link></div> 
         </div>
        </form>
      </div>
    </div>
  );
}
