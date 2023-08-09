import React, { useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignIn() {
  //
  const navigate = useNavigate();
  //
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // reset form data
  function resetFormInput() {
    setFormData({
      email: "",
      password: "",
    });
  }

  // form input change handler
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  //   form submit handler
  function handleSubmit(e) {
    e.preventDefault();

    // logic implementation needed

    //
    navigate("/");
    resetFormInput();
  }
  //
  return (
    <div className="form-container">
      <div className="form-wraper">
        <span className="logo">My Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
          />
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
          />

          <button type="submit">SignIn</button>
        </form>
        <p>
          Don't have an account? <Link to={"/signup"}>SignUp</Link>
        </p>
      </div>
    </div>
  );
}
