import React from 'react';
import { Link } from 'react-router-dom'; 

function OpenAccont() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center' >
                
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='text-muted mb-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                
                {/* Changed button to Link component and added the 'to' prop */}
                <Link
                    to="/signup" 
                    className='p-3 btn btn-primary fs-5 mb-5' 
                    style={{width:"20%", margin:"0 auto", textDecoration: "none"}} // textDecoration: "none" keeps the button style clean
                >
                    Sign up for free
                </Link>

            </div>
        </div>
    );
}

export default OpenAccont;