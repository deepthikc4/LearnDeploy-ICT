import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Margin } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="body2" color="black" style={{textAlign:'center'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://ictkerala.org/">
      ICT ACADEMY OF KERALA  
      </Link>{'        '}
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

const AdminFooter = () => {
  const footerStyle = {
   
    
    color: '#fff', 
    textAlign: 'center', 
    position: 'fixed', 
    left: 0,
    bottom: 0,
    width: '100%', 
  };
  return (
    <footer style={footerStyle}>
     <Typography variant="body2" color="black" style={{textAlign:'center'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://ictkerala.org/">
      ICT ACADEMY OF KERALA  
      </Link>{'        '}
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </footer>
  );
}




export default AdminFooter