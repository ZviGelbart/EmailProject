import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Update({ handleCloseClick }) {
  // הסטייט של המשתנים המוצגים בטופס
  // const user = localStorage.getItem("userData")
  const [formData, setFormData] = useState({
    //כאן אני צריך להכניס את היוזר שמגיע מהדאטה
    // firstName: user.firstName,
    // lastName: user.lastName,
    // email: user.email,
    // dateOfBirth: user.dateOfBirth,
    // password: user.password,
  });

  // פונקציה לעדכון הסטייט כאשר שדה בטופס משתנה
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // פונקציה לשליחת הטופס
  const handleSubmit = (e) => {
    e.preventDefault();
    // ניתן להוסיף פה לוגיקה נוספת לעדכון המידע בשרת
    console.log("Form submitted:", formData);
  };

  const DeleteRows = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      img: "",
      dateOfBirth: "",
      password: "",
    });
  };
  const logOut = () => {
    localStorage.removeItem("accessToken");
       localStorage.removeItem("refreshToken");
  };
  return (
    <div className="">
      <button onClick={handleCloseClick}>✖️</button>
      <h2 className="text-2xl text-center">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <label className="m-4" htmlFor="firstName">
            First Name:
          </label>
          <input
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
          <input
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
          <input
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
          <input
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
          <input
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
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex">
          <button
            onClick={handleCloseClick}
            className="bg-blue-500 text-white p-2 m-9 rounded-md"
            type="submit"
          >
            Update Profile
          </button>
          <button
            onClick={DeleteRows}
            className="bg-red-900 text-white p-2 m-9 rounded-md"
            type="submit"
          >
            delete rows
          </button>
          <button
            onClick={logOut}
            className="bg-red-900 text-white p-2 m-9 rounded-md"
            type="submit"
          >
              <Link to="/login"> log Out</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
