import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'


export default function Navbar({activeUser}) {
  return (
    <div className="navbar">
      <Link to="/"><div className="navbar-link">Home</div></Link>
      <Link to="/catalog"><div className="navbar-link">Catalog</div></Link>
      <div className="logo">REFLIX</div>
    </div>

  )
}
