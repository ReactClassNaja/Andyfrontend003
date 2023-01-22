import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

  const navigate = useNavigate()
  const handleGoLogin = () => {
    navigate('/login')
  }

  if (props.isLoggedIn) {
    return (
      <div>Home</div>
    )
  }else{
    return(
      <div>
        <h1>Please Login Naja</h1>
        <br/>
        <button onClick={handleGoLogin}>Login</button>
      </div>
    )
  }
}
