import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

// const alwaysRender = (
//   <>
//     <NavLink className="nav-link" to='/about-us'> About Us </NavLink>
//     <NavLink className="nav-link" to='/socks'>All Socks </NavLink>
//   </>

// )

// const authenticated = (
//   <>
//     <NavLink className="nav-link" to='/new-arrivals'> New Arrivals </NavLink>
//     <NavLink className="nav-link" to='/sign-out'> Sign Out </NavLink>
//   </>
// )

// const unauthenticated = (
//   <>
//     <NavLink className="nav-link" to='/sign-up'> Sign Up </NavLink>
//     <NavLink className="nav-link" to='/sign-in'> Sign In </NavLink>
//   </>
// )


export default function Nav({ user }) {
  // const [menuOpen, setMenuOpen] = useState(false)

  // const toggleMenu = (() => {
  //   setMenuOpen(!menuOpen)
  // })




  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/state">Climbd-It </NavLink>
        |
        <NavLink className="logo" to="/addstate/"> Add a State</NavLink>
      </div>
    </nav>
  )
}