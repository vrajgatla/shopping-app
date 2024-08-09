import React from 'react'
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>get Exclusive offers on Your Email</h1>
        <p>subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Yor email id' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter