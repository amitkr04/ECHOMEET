import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../../Styles/Login.module.css";
import axios from "axios";

const Login = () => {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:9000/api/v1/auth", // Set your backend URL here
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", formData);
      console.log(`The response after form submition is: ${response}`);
      console.log("Form submitted:", formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(`The error is: ${error}`);
    }
    // TODO: Implement login logic (e.g., send data to server, handle response)
  };
  return (
    <div className={css.loginContainer}>
      <h2>Login</h2>
      <form className={css.form} onSubmit={handleSubmit}>
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
        <button type="submit" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
