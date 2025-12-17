import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo-link">
              <div className="logo-text">
                <img src={logo} alt="Hero Logo" className="logo-img" />
                <span>Hero.IO</span>
              </div>
            </Link>
          </div>
        </div>
        <hr className="footer-sep" />
        <div className="footer-bottom">
          <div className='copyright'>Copyright © {new Date().getFullYear()}- All right reverved </div>
          <div className="footer-links">Made with ❤️</div>
        </div>
      </div>
    </footer>
  )
}
