import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div className='home-div'>
      <Layout>
      <div>
        <h3>Welcome to Climbd-It!</h3>
        <h5>A website for Climbers to show off their sends.</h5>
        <p>Login above to see where others have climbed.</p>
      </div>
      </Layout>
    </div>
  )
}
