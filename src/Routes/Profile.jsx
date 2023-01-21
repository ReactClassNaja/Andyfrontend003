import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Avatar, Typography, Box, TextField, Grid, Button, } from '@mui/material/';

export default function Profile(props) {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [id, setid] = useState("")

    useEffect(() => {
        axios({
            url: 'http://localhost:3000/getuser/1',
            method: 'get'
        }).then(res => {
            console.log(res.data)
            setid(res.data[0].id)
            setfirstname(res.data[0].firstname)
            setlastname(res.data[0].lastname)
            setname(res.data[0].name)
            setemail(res.data[0].email)
            setpassword(res.data[0].password)
        })
    }, [])

    const handleUpdateUser = () => {
        axios({
            url: 'http://localhost:3000/updateuser',
            method: 'put',
            data: {
                id: id,
                firstname: firstname,
                lastname: lastname,
                name: name,
                email: email,
                password: password
            }
        }).then(res => {
            console.log(res.data)
        })
    }

    const handleChangeFirstname = (e) => {
        setfirstname(e.target.value)
    }
    const handleChangeLastname = (e) => {
        setlastname(e.target.value)
    }
    const handleChangeName = (e) => {
        setname(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setemail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setpassword(e.target.value)
    }

    const navigate = useNavigate()
    const handleGoLogin = () => {
        navigate('/login')
    }

    if (props.isLoggedIn) {
        return (
            <Box>
                <Box display='flex'>
                    <Box width='20%' padding={2}>
                        <Avatar sx={{ width: 100, height: 100 }}>P</Avatar>
                    </Box>
                    <Box width='80%' display='flex' justifyContent='center' flexDirection='column'>
                        <Typography variant='h4'>Andy PK</Typography>
                        <Typography variant='body1'>Andy@gmail.com - Software Engineer</Typography>
                        <Typography variant='caption'>Avatar by gravtar.com. Or upload your own...</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography padding={2} variant='h5'>Account</Typography>
                </Box>

                <Grid container spacing={2} padding={2}>

                    <Grid item xs={12} sm={3} display='flex' alignItems='center'>
                        <Typography variant='h6'>First name</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField value={firstname || ""} label="First name" onChange={handleChangeFirstname} id="outlined-basic" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={3} display='flex' alignItems='center'>
                        <Typography variant='h6'>Last name</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField value={lastname || ""} label="Last name" onChange={handleChangeLastname} id="outlined-basic" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={3} display='flex' alignItems='center'>
                        <Typography variant='h6'>Username</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField value={name || ""} label="Username" onChange={handleChangeName} id="outlined-basic" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={3} display='flex' alignItems='center'>
                        <Typography variant='h6'>Email</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField value={email || ""} label="Email" onChange={handleChangeEmail} id="outlined-basic" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={3} display='flex' alignItems='center'>
                        <Typography variant='h6'>Password</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField value={password || ""} label="Password" onChange={handleChangePassword} id="outlined-basic" variant="outlined" />
                    </Grid>

                </Grid>

                <Box padding={2} direction="row">
                    <Button onClick={handleUpdateUser} variant="outlined">Update</Button>
                </Box>
            </Box>
        )
    } else {
        return (
            <div>
                <h1>Please Login</h1>
                <br />
                <button onClick={handleGoLogin}>Login</button>
            </div>
        )
    }
}
