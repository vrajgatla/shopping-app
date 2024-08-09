import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagrom_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer_icons-container">
          <img src={instagrom_icon} alt="" />
        </div>
        <div className="footer_icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 - All Right Reserved</p>
      </div>


    </div>
  )
}

export default Footer