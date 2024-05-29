import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import { useHistory } from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const navigate=useNavigate();
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  // const inputHandler=(e)=>{
  //   setUsers({...user,[e.target.name]:e.target.value})
  //   console.log(user);
  //  setUsername(e.target.value);
  //   }

    const addHandler=()=>{
      // const username = user;
      console.log(user);
      axios.post("http://localhost:3005/api/login",{user,password})
      .then((res)=>{
    let role=res.data.role;
    
        console.log(res);
        alert(res.data.message);
        sessionStorage.setItem('userToken',res.data.token);
       
        if(role==='admin')
        {
            navigate('/admindashboard')
           
        }
        else if(role==='mentor'){
       
          const username = res.data.name;
             navigate(`/mentordashboard/${username}`);
            // history.push(`/mentordashboard/${username}`);
        }
        else{
            navigate('/')
        }
        // console.log(res.data.token);
        // sessionStorage.setItem('userToken',res.data.token);
       
      })
      .catch((error)=>{})
    }

  return (
    <>
    <Navbar />
      {/* Header Start */}
      <div>
        <div class="px-4 py-5 text-center title-header">
          <h1 className="m-4 text-dark">Login</h1>
        </div>
      </div>
      {/* Header End */}
    <div>

<Typography variant="h5" gutterBottom style={{textAlign:'center',marginTop:'200px',fontFamily:'fantasy'}}>Login Page</Typography>
 <Box align='center' style={{margin:'0 auto',marginTop:'10px',padding:'20px' }}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
      <div>
        <TextField
          label="Email"
          id="Email"
          type="text" value={user}
          onChange={handleUserChange}
          
        />
       
      
      </div>
      <div>
        <TextField
         
          id="Password"
          label="Password"
          type="password" value={password}
          onChange={handlePasswordChange}
        />       
      </div>
      <Button onClick={addHandler}variant='contained'style={{marginTop:'20px',color:'white',backgroundColor:'black'}}>Login</Button>
    
    </Box>

    </div>
      <Footer />
    </>
  )
}

export default Login