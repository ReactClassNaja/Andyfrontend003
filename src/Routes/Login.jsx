import React, { useState } from 'react'
import axios from 'axios';
import { Box, Grid, TextField, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Login(props) {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    axios({
      url: window.$api + '/login',
      method: 'post',
      data: {
        email: email,
        password: password
      },
      withCredentials: true
    }).then(res => {
      if (res.data.status === 200) {
        props.setisLoggedIn(true)
        navigate('/')
        console.log('logged in')
      } else {
        console.log('fail')
      }
    })
  }

  const handleChangeEmail = (e) => {
    setemail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setpassword(e.target.value)
  }

  if (!props.isLoggedIn) {
    return (
      <Box>
        <Grid container spacing={2} padding={2}>

          <Grid item xs={12} display='flex' justifyContent='center'>
            <TextField label="Email" onChange={handleChangeEmail} value={email || ""} id="outlined-basic" variant="outlined" />
          </Grid>

          <Grid item xs={12} display='flex' justifyContent='center'>
            <TextField label="Password" onChange={handleChangePassword} value={password || ""} id="outlined-basic" variant="outlined" />
          </Grid>

        </Grid>

        <Box padding={2} direction="row" display='flex' justifyContent='center'>
          <Button onClick={handleLogin} variant="outlined">Login</Button>
        </Box>
      </Box>
    )
  }else{
    return (
      <div>
        <Navigate to='/'/>
      </div>
    )
  }
}
