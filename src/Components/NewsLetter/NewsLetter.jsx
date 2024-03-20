import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>For any query drop in your email</h1>
      <p>Our team will contact you soon</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Send</button>
      </div>
    </div>
  )
}

export default NewsLetter
