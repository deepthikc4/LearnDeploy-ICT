import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import SideBarAdmin from './SideBarAdmin';
import AdminFooter from '../components/AdminFooter';
import axiosInstance from '../axiosinstance';

const AddProjectForm = (props) => {

  const navigate=useNavigate();
  
  const[formdata,setform]=useState(props.data);
  
  const inputHandler=(e)=>{
  
  setform({...formdata,[e.target.name]:e.target.value});
  }
  
  const addData=()=>{
  
    if(props.method==='post')
    {
      console.log('clicked',formdata)
      axiosInstance.post('http://localhost:3005/api/projectform',formdata)
      
      .then((res)=>{
      alert( res.data.Message);
      console.log(res.data);
      navigate('/admindashboard');
      
      })
      .catch((error)=>{
        console.log(error);
      })}

      if(props.method==='put')
{
axiosInstance.put('http://localhost:3005/api/updateproject/'+formdata._id,formdata).then((res)=>{
alert(res.data.Message);
console.log(res.data);
navigate('/admindashboard');
window.location.reload(false);
})
.catch((error)=>{
  console.log(error);

})

}
    }
 
  
  
  





  return (
    
   <>
   <SideBarAdmin/>

    <div style={{margin:"10% 20% 10%  30%",backgroundColor:'white', padding:"50px",border:"1px solid black",width:"800px"}}>
     <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={2} >
       
        <Grid item xs={12}>
        
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Project Topic:</label>
        <TextField
         style={{width:"410px"}}
        
          label="Enter project Name"
          type="text"
          name='topic'
          value={formdata.topic}
          onChange={inputHandler}
         
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}}>Description</label>
        <TextField

          style={{width:"410px"}}
        
          label="Enter Description"
          type="text"
          name='description'
          value={formdata.description}
          onChange={inputHandler}
        
        />
        </Grid>
        <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >Image:</label>
        <TextField
        style={{width:"410px"}}
         
          label="Enter image url"        
          name='image'
          value={formdata.image}
          onChange={inputHandler}
        
        />
        </Grid>
        {/* <Grid item xs={12}>
        <label style={{float: 'left',marginRight:'80px',fontSize:'22px',width:"200px"}} >mentor</label>
        <TextField
     style={{width:"410px"}}
         
          label="Enter mentor name"
        
          name='mentor'
          value={formdata.mentor}
          onChange={inputHandler}
          
        
        />
        </Grid> */}
      
        <Grid item xs={12}>
        <button variant='contained' onClick={addData}
       style={{padding:'10px',backgroundColor:'#7b68ee',color:"white",width:'150px',marginTop:'50px',marginLeft:'300px'}}>Add Data</button>
        </Grid>
      </Grid>
    </Box>
    </div>
    <AdminFooter/> 
    </>
    
  )
}




export default AddProjectForm