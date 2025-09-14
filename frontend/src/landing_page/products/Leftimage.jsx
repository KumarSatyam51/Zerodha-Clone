import React from 'react';

function Leftimage({imageURL, productName, productDescription, tryDemo, learnMore, googleplay, appStore}) {
    return ( 
        <div className='container mt-5 '>
            <div className='row p-5'>
                <div className='col-6'>
                <img src={imageURL} />
                </div>
                <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div >
                <a href={tryDemo} style={{textDecorationLine:"none"}}>Try Demo</a>
                <a href={learnMore} style={{marginLeft:"50px", textDecorationLine:"none"}}>Learn More</a>
                </div>
                <div className='mt-3'>
                <a href={googleplay}><img src="media\googlePlayBadge.svg" /></a>
                <a href={appStore}><img src="media\appstoreBadge.svg" style={{marginLeft:"50px"}} /></a>
                </div>
                </div>
                
            </div>
        </div>
     );
}

export default Leftimage;