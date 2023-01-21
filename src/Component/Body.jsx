import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../Style/Body.css';

const currencies = [
    {
        value: 'English',
        label: 'English',
    },
    {
        value: 'Lao',
        label: 'Lao',
    },
    {
        value: 'Thai',
        label: 'Thai',
    },
];

// const [firstname, setfirstname] = useState("")
// const [lastname, setlastname] = useState("")
// const [name, setname] = useState("")
// const [email, setemail] = useState("")
// const [password, setpassword] = useState("")

// useEffect(() => {
//   axios({
//     url: 'http://localhost:3000/getuser/1',
//     method: 'get'
//   }).then(res => {
//     console.log(res.data)
//     setfirstname(res.data[0].firstname)
//     setlastname(res.data[0].lastname)
//     setname(res.data[0].name)
//     setemail(res.data[0].email)
//     setpassword(res.data[0].password)
//   })
// }, [])

export default function Body() {
    return (
        <div className='box'>
            <div className='split left'>
                <div className='Circle'>
                    Image
                </div>
                <div className='split right'>
                    <div>
                        <h1>Phonesavanh Keonouchanh</h1>
                    </div>
                    <div>
                        <p>Andy.Phonesavanh@hotmail.com - Administrator</p>
                    </div>
                    <div>
                        <p>Avatar by gravatar.com. Or upload youur own...</p>
                    </div>
                    <div className='Rectangle'>
                        <p>Drop your files here or click in this area</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='split left'>
                    <h1>Account</h1>
                    <p>First name</p>
                    <p>Last name</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>Password</p>
                    <p>Language</p>
                </div>
                <div className='split right'>
                    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }, }} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="First name" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Last name" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <br />
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </Box>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, }} noValidate autoComplete="off">
                        <div>
                            <TextField id="outlined-select-currency" select label="Language">
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}
