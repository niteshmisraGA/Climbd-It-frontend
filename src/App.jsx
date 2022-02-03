import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getState, deleteState } from './services/index.js'
import { logOut, verifyUser } from './services/auth.js'
import States from './screens/States/States'
import Home from './screens/Home/Home'
import StateDetail from './screens/StateDetail/StateDetail'
import AddState from './components/AddState/AddState'
import Edit from './components/Edit/Edit'
import LogIn from './components/logIn/logIn'

function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [toggle, setToggle] = useState(false)

const navigate = useNavigate()

useEffect(() => {
  const fetchUser = async () => {
    const res = await verifyUser()
    res ? setLoggedIn(true) : setLoggedIn(false)
  }
  fetchUser()
}, [])

const handleLogout = async () => {
  await logOut()
  setLoggedIn(false)
  navigate('/')
}



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home handleLogout={handleLogout}/>}/>
        <Route path='/state' element={<States />} />
        <Route path='/state/:id' element={<StateDetail />} />
        <Route path='/addstate/' element={loggedIn ? <AddState /> : <Navigate to='login/'/>} />
        <Route path='/state/:id/edit' element={<Edit />} />
        <Route path='login/' element={<LogIn setLoggedIn={setLoggedIn} />} />
      </Routes>


    </div>
  );
}

export default App;
