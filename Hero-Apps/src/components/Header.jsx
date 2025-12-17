import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="logo-link">
  <div className="logo-text">
    <img src={logo} alt="Hero Logo" className="logo-img" />
    <span>Hero.IO</span>
  </div>
</Link>

        <nav className="main-nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Home</NavLink>
          <NavLink to="/apps" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Apps</NavLink>
          <NavLink to="/installation" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>Installation</NavLink>
        </nav>
        <div className="header-cta">
          <a className="contrib-btn" href="https://github.com/Rajushorif" target="_blank" rel="noreferrer">Contribution</a>
        </div>
      </div>
    </header>
  )
}
