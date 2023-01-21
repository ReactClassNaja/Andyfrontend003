import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 6 }}>
            User: Andy
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            Save
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}