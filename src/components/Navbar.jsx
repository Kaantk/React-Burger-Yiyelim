import React from 'react'
import { NavLink } from 'react-router-dom' 
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <img src="/assets/burgerlogo.png" alt="Burger Yiyelim Logosu" />
          <div className="nav-menu">
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">Hakkımızda</NavLink>
            <NavLink to="/contact">İletişim</NavLink>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar