import React from 'react';
import { useState, useEffect } from 'react'
import './StateDetail.css'
import Layout from '../../components/Layout/Layout'
import { getState, deleteState } from '../../services/index.js'
import { Link, useParams, useNavigate } from 'react-router-dom'


export default function StateDetail() {

let navigate = useNavigate()
const [state, setState] = useState([])
const { id } = useParams()

useEffect(() => {
  const fetchState = async () =>{
    const stateDetail = await getState(id)
      console.log(stateDetail.locations)
      setState(stateDetail)
  }
  fetchState()
}, [])

const handleDelete = async () => {
  await deleteState(state.id)
  navigate('/state')
}

  return (
    <Layout>
      <div>
      <h3>Climbing Spots:</h3>
        {state.locations ?
        state?.locations.map((location) => {return (
          <Link to='/'>
          <div>
            <p>{location}</p>
          </div>
          </Link>
  )}):<div>Loading...</div>}
          <Link to={`/state/${id}/edit`}>
            <button>
              Edit State
            </button>
          </Link>
              <button className='delete-button'
                onClick={handleDelete}
              >
                Delete
              </button>
      </div>
    </Layout>
  )
}
