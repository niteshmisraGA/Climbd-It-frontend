import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getState, deleteState } from './services/index.js'
import { logOut, verifyUser } from './services/auth.js'
import States from './screens/States/States'
import Home from './screens/Home/Home'
import StateDetail from './screens/StateDetail/StateDetail'
import AddState from './components/AddState/AddState'
import Edit from './components/Edit/Edit'

function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [toggle, setToggle] = useState(false)

const navigate = useNavigate()

// useEffect(() => {
//   const
// })



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/state' element={<States />} />
        <Route path='/state/:id' element={<StateDetail />} />
        <Route path='/addstate/' element={<AddState />} />
        <Route path='/state/:id/edit' element={<Edit />} />
      </Routes>


    </div>
  );
}

export default App;
