import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return <>
<nav className="navbar navbar-expand-lg main-color-bg py-4 position-fixed top-0 start-0 w-100">
  <div className="container">
    <NavLink to = '' ><h1 className="fs-2 text-white fw-bold">START FRAMEWORK</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink to='about' className='nav-link text-white fw-bold fs-6 rounded-3 px-3 mx-1 '>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='porfolio' className='nav-link text-white fw-bold fs-6 rounded-3 px-3 mx-1'>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='contact' className='nav-link text-white fw-bold fs-6 rounded-3 px-3 mx-1'>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
} 