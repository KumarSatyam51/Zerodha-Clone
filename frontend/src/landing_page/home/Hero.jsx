import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center' >
        <img src='media/homeHero.png' alt='Hero Image' className='mb-5' />
        <h1 className='mt-5'>Invest in everthing</h1>
        <p className='text-muted mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        
        {/* Changed button to Link component */}
        <Link 
          to="/signup" // Directs the user to the route defined in App.jsx
          className='p-3 btn btn-primary fs-5 mb-5' 
          style={{width:"20%", margin:"0 auto", textDecoration: "none"}} // textDecoration: "none" removes the default link underline
        >
          Sign up for free
        </Link>

      </div>
    </div>
  );
}

export default Hero;