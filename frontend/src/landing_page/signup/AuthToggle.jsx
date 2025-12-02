import React, { useState } from "react";
import SignupForm from "./SignupForm";
import Login from "./login";
import "./signup.css";

const AuthToggle = () => {
  const [currentView, setCurrentView] = useState('signup');

  const switchToLogin = () => setCurrentView('login');
  const switchToSignup = () => setCurrentView('signup');

  return (
    <div className="dark-theme-wrapper"> 
      <div className="dark-auth-container">
        
        {currentView === 'signup' ? (
          <SignupForm switchToLogin={switchToLogin} />
        ) : (
          <Login switchToSignup={switchToSignup} />
        )}

      </div>
    </div>
  );
};

export default AuthToggle;