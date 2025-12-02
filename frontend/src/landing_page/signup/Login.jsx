import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const BACKEND_URL =   import.meta.env.VITE_APP_BACKEND_URL;
const DASHBOARD_URL = import.meta.env.VITE_APP_DASHBOARD_URL;

const Login = ({ switchToSignup }) => {
  
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted with:", formData);
    console.log(BACKEND_URL)
    console.log(DASHBOARD_URL)
    try {
      const response = await axios.post(`${BACKEND_URL}/signin`, formData);

      console.log("Login Successful:", response.data);

      alert("Login successful!");

      // Redirect to home page or dashboard
      navigate(`${DASHBOARD_URL}`);   // change as per your route

    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <form className="dark-auth-form-container" onSubmit={handleSubmit}>
      <h2 className="dark-auth-title">Sign In</h2>

      <div className="input-group">
        <input 
          type="text" 
          placeholder="Email or User ID" 
          className="dark-auth-input" 
          name="email"
          value={formData.emailOrId}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <input 
          type="password" 
          placeholder="Password" 
          className="dark-auth-input"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="dark-action-button dark-primary-button">
        Log In
      </button>

      <div className="dark-auth-footer-link-container dark-login-footer">
        <button type="button" onClick={switchToSignup} className="dark-link as-button">
          New to this? Sign Up
        </button>
      </div>
    </form>
  );
};

export default Login;
