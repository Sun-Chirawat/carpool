import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#7D2923'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function ButtonAppBars() {
  return (
  
    <main className={roboto.className}>
    <ThemeProvider theme={theme}>
      <Box md={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary" elevation={0} >
          <Toolbar>
            <Button color="inherit" align='center' sx={{ flexGrow: 1 }}><h3>ตาราง</h3></Button>
            <Button color="inherit" align='center' sx={{ flexGrow: 1 }}><h3>โพสต์</h3></Button>
            <Button color="inherit" align='center' sx={{ flexGrow: 1 }}><h3>แต้ม</h3></Button>
            <Button color="inherit" align='center' sx={{ flexGrow: 1 }}><h3>ประวัติ</h3></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
    </main>
  );
}