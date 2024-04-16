//import React from 'react'
//import './Features.css'
//export const Features = () => {
  //return (
  //  <div className='feature'>
//
  //  </div>
//  )
//}
//export default Features



import React from 'react';
import './Features.css';
import petbg from '../Assets/petbg.jpg'; 

const Feature = () => {
  return (
    <div className='features'>
      <h1 className='features-heading'>Features</h1>
      <div className='feature-1'>
      <div className="image" style={{backgroundImage: `url(${petbg})`}}></div>
      <div className="text">
        <h3>Feature 1</h3>
        <p>Description of Feature 1</p>
      </div>
    </div> 

      <div className='feature-2'>
        <h3>Feature 2</h3>
        <p>Description of Feature 2</p>
      </div>

      
      <div className='feature-3'>
        <h3>Feature 3</h3>
        <p>Description of Feature 3</p>
      </div>
      

  
 
    </div>
  );
}

export default Feature;


