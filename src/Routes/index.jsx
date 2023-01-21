import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
import axios from 'axios'

export default function () {

    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() => {
      axios({
        url: 'http://localhost:3000/isLoggedIn',
        method: 'post',
        withCredentials: true
      }).then(res => {
        // console.log(res.data)
        if(res.data.status === 200){
            setisLoggedIn(true)
        }
      })
    }, [])
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
                <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn}/>} />
                <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>} />
            </Routes>
        </BrowserRouter>
    )
}
