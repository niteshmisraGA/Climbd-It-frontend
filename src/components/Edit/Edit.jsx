import React from 'react';
import { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import { getState, updateState } from '../../services/index.js'
import { Link, useParams, useNavigate } from 'react-router-dom'





export default function Edit() {

let navigate = useNavigate()

const [editState, setEditState] = useState({
  stateName : '',
  locations: []
})


let { id } = useParams()

useEffect(() => {
  const fetchStateEdit = async () => {
    const edit = await getState(id)
    setEditState(edit)
  }
})

const handleChange = (event) => {
    const {name , value} = event.target
    setEditState({
      ...editState,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateState(id, editState)
    navigate('/state')

  }




  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <label className='label'>Edit this State:</label>
          <input
            className='input'
            value={editState.stateName}
            name='stateName'
            
            onChange={handleChange}
          />
        </form>
      </div>
    </Layout>
  )
}
