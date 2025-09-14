import React from 'react';

function NotFound() {
    return ( 
         <div className='container p-5 mb-5'>
        <div className='row text-center' >
            
            <h1 className='mt-5'>404 Not Found</h1>
            <p className=' text-muted mb-5'>Sorry, the page you are looking for does not exit.</p>
            <button  className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Go Home</button>

        </div>

     </div>
     );
}

export default NotFound;