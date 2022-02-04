import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { grabStates } from '../../services/index'
import Layout from '../../components/Layout/Layout'
import './States.css'




const States = () => {
  const [states, setStates] = useState([])
  useEffect(() => {
    const fetchStates = async () => {
      const allStates = await grabStates()
      console.log(allStates)
      setStates(allStates)
    }
    fetchStates()
  },[])

  const state = states.map((state, index) =>
  <div className='state'>
  <Link to={`/state/${state.id}/`}>
    <h1 key = {index}>{state.stateName}</h1>
  </Link>
  </div>
  )

  return (
   <Layout>
   <div className='all-states'>
    {state}
   </div>
   </Layout>
  )  
}

export default States