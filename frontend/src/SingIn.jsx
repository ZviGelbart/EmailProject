import React, { useState } from "react";
import { Link} from 'react-router-dom';

export default function SingIn() {
  // הסטייט של המשתנים המוצגים בטופס
  const [formData, setFormData] = useState({
    //כאן אני צריך להכניס את היוזר שמגיע מהדאטה
    firstName: "",
    lastName: "",
    email: "",
    img: "",
    dateOfBirth: "",
    password: "",
  });

  // פונקציה לעדכון הסטייט כאשר שדה בטופס משתנה
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // פונקציה לשליחת הטופס
  const handleSubmit = (e) => {
    e.preventDefault();
    // ניתן להוסיף פה לוגיקה נוספת לעדכון המידע בשרת
    console.log("Form submitted:", formData);
  };

  const valideition=()=>{
        // if(זה לאכפול במערכת וכל שאר הבדיקות שצריך אז זה יעבור לדף הראשי של המייל){

        // }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  border border-slate-950">
       <form onSubmit={handleSubmit}>
          <Link to="/login" className="flex ">✖️</Link>
          <h2 className="text-center">create Profile</h2>
        <div className="p-2">
          <label className="m-4" htmlFor="firstName">
            First Name:
          </label>
          <input className="border border-slate-950"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label className="m-4" htmlFor="lastName">
            Last Name:
          </label>
          <input className="border border-slate-950"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <label className="m-4" htmlFor="email">
            Email:
          </label>
          <input className="border border-slate-950"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <label className="m-4" htmlFor="img">
            Image URL:
          </label>
          <input className="border border-slate-950"
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <label className="m-4" htmlFor="dateOfBirth">
            Date of Birth:
          </label>
          <input className="border border-slate-950"
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <label className="m-4" htmlFor="password">
            Password:
          </label>
          <input className="border border-slate-950"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Link to="/AllEmail"> <button
          onClick={valideition}
          className="bg-blue-500 text-white p-2 m-9 rounded-md"
          type="submit"
        >
          create Profile
        </button></Link>
      </form>
    </div>
  );
}
