import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSession, signIn, signOut } from 'next-auth/react'


export default function ButtonAppBar() {
  const { data: session } = useSession() 
  if (session) {
    return (
      <Box md={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
         
            <Typography variant="h6" component="div" align='center' sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              Logo
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Welcome, {session.user.name}
            </Typography>
            <Button color="error" onClick ={ () => signOut()}>LOGOUT</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
    }else{
      return (
        <Box md={{ flexGrow: 1 }}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
           
              <Typography variant="h6" component="div" align='center' sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                Logo
              </Typography>
            
              <Button color="success" onClick ={ () => signIn()}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
  
}