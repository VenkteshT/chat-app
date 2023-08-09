import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//
const avatar =
  "https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-gallery-logo-icon-design-template-vector-png-image_1048779.jpg";

export default function SignUp() {
  //
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //
  const navigate = useNavigate();

  // reset form data
  function resetFormInput() {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      resetFormInput();
      toast.error(`Password mismatch!`, { autoClose: 2000 });
      return;
    }
    // login implementation needed

    //
    navigate("/");
    toast.success("login success");
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
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
          />
          <input
            onChange={handleInputChange}
            type="email"
            name="name"
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
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={avatar} height={40} width={40} alt="avatar" />
            <span>choose avatar</span>
          </label>
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to={"/signin"}>Signin</Link>
        </p>
      </div>
    </div>
  );
}
