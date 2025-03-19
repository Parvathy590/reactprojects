import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div><header className="header">
    <h1 className="title">Welcome to Real Estate Listings</h1>
    <p className="subtitle">Find, explore, and list properties with ease.</p>
    <nav>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header></div>
  )
}

export default Navbar