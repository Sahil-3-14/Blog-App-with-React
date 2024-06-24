import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components'
import { Outlet } from 'react-router-dom'


function App() {

  // console.log(process.env.REACT_APP_APPWRITE_URL)    this is for the app created with react only
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout({}))
      }
    })
    // i can use .catch here as well
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

