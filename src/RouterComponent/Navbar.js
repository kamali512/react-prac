import React from 'react'
import {Link, NavLink} from "react-router-dom"
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-link active" to="/">Home <span class="sr-only">(current)</span></NavLink>
      <NavLink className="nav-link" to="/about">About</NavLink>
      <NavLink className="nav-link" to="/contact">Contact</NavLink>

    </div>
  </div>
</nav>
   
  )
}

export default Navbar