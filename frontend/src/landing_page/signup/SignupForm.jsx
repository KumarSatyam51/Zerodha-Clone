import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./signup.css";

const SignupForm = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', confirmEmail: '', password: '', confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real app, this would be an API call to your backend /signup endpoint
    console.log("Signup form submitted with data:", formData);
    // Placeholder logic:
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/signup", formData);
      console.log("Signup Success:", response.data);
      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form className="dark-auth-form-container" onSubmit={handleSubmit}>
      <h2 className="dark-auth-title">Sign Up</h2>

      <div className="input-row">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="First Name" 
            className="dark-auth-input" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Last Name" 
            className="dark-auth-input" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="input-group">
        <input 
          type="email" 
          placeholder="Email" 
          className="dark-auth-input" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <input 
          type="email" 
          placeholder="Confirm Email" 
          className="dark-auth-input" 
          name="confirmEmail"
          value={formData.confirmEmail}
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

      <div className="input-group">
        <input 
          type="password" 
          placeholder="Confirm Password" 
          className="dark-auth-input" 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="dark-action-button dark-primary-button">
        Submit
      </button>
      
      <div className="dark-auth-footer-link-container">
        <p className="dark-footer-text">
          Already have an account? <button type="button" onClick={switchToLogin} className="dark-link as-button">Sign In</button>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;