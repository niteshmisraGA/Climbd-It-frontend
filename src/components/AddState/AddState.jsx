import React from 'react';

import { useState, useEffect } from 'react'
// import './StateDetail.css'
import Layout from '../../components/Layout/Layout'
import { createState } from '../../services/index.js'
import { Link, useParams, useNavigate } from 'react-router-dom'




export default function AddState() {
  let navigate = useNavigate()

  const[newState, setNewState] = useState({
    stateName: '',
    locations: [],
  })
  const handleChange = (event) => {
    const {name , value} = event.target
    setNewState({
      ...newState,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createState(newState)
    navigate('/state')

  }



  return (
  <Layout>
  <div>
  <form onSubmit={handleSubmit}>
    <label className='label'>Add a State:</label>
    <input
      className='input'
      value={newState.stateName}
      name='stateName'
      onChange={handleChange}
    />
  </form>
  </div>
  </Layout>
  )
}
