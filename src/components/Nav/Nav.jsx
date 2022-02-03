import React, { useState } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'




export default function Nav({ user }) {




  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/state">Climbd-It </NavLink>
        |
        <NavLink className="logo" to="/addstate/"> Add a State</NavLink>
        |
        <NavLink to="/login/"> Sign In </NavLink> 
      </div>
    </nav>
  )
}