import React from 'react';

function Hero() {
    return ( 
       <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className=" ">Support Portal</h4>
        <a href="">Track Tickets</a>
       </div>
        <div className=" row p-5 m-3 " >
          <div className=" col-6 p-5 " >
            <h1 className='fs-3'>Search for an answer or browse help topic to create a ticket</h1>
            <input placeholder='eg: how do i activate F&Q,why is my order getting rejected..' /><br />
           <a href=""> Track account Openinga </a>
           <a href="">Track segment activation</a>
           <a href="">Intraday margins</a><br />
           <a href="">Kite user manual</a> 
            
          </div>
           <div className=" col-6 p-5 " >
             <h1 className='fs-3'>Featured</h1>
             <ol>
              <li><a href=""> Current Takeover and Delisting - January 2024 </a><br /></li>
              <li> <a href=""> Latest intraday leverage - MIS & CO </a><br /></li>
             </ol>
             
            
           </div>
        
       </div>
    </section>
     );
}

export default Hero;