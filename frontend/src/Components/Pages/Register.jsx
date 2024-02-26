import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "../../Styles/Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/login");
  };
  return (
    <>
      <div className={css.registerContainer}>
        <h2>Register</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <div className={css.buttonDiv}>
            <button
              type="submit"
              className={css.button}
              onSubmit={handleSubmit}
            >
              Register
            </button>
            <Link to="/login" type="button" className={css.button}>
              Already a User
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
