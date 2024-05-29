import React, { useEffect, useState } from 'react'
import SideBarAdmin from '../Admin/SideBarAdmin'
import AdminFooter from '../components/AdminFooter'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Style } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AddMentorForm from './AddMentorForm';
import axios from 'axios';
import AddProjectForm from './AddProjectForm';
import axiosInstance from '../axiosinstance';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white,
   backgroundColor:'black', 
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const AdminDashboard = () => {
  const [dataset,setData]=useState([]);
  const [dataset1,setData1]=useState([]);


  useEffect(()=>{
   axiosInstance.get('http://localhost:3005/api/admindashboard').then((res)=>{
     console.log(res);
     setData1(res.data);
   })
   
   },[])

  //  for project details
   useEffect(()=>{
    axiosInstance.get('http://localhost:3005/api/admin').then((res)=>{
      console.log(res);
      setData(res.data);
    })
    
    },[])

  
   const deleteMen=(id)=>{
    axiosInstance.delete('http://localhost:3005/api/delete/'+id).then((res)=>{
      alert(res.data.Message);
      console.log(res.data);
      window.location.reload(false);
          })
          .catch((error)=>{
            console.log(error);
          })
   }
  //  for project
   const deleteProject=(id)=>{
    axiosInstance.delete('http://localhost:3005/api/deleteproject/'+id).then((res)=>{
      alert(res.data.Message);
      console.log(res.data);
      window.location.reload(false);
          })
          .catch((error)=>{
            console.log(error);
          })
   }
   //  update  mentor
  const[update,setUpdate]=useState(false);
  const [value,setValue]=useState([]);

  const updateMen=(data)=>{
    console.log(data);
    setUpdate(true);
    setValue(data);
  }
  
// update Project
const[update1,setUpdate1]=useState(false);
  const [value1,setValue1]=useState([]);

  const updateProject=(data)=>{
    console.log(data);
    setUpdate1(true);
    setValue1(data);
  }
   
    // return(
    //   <div>
    //   <SideBarAdmin/>
   
    //    <div >
    let finalJSX=(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginTop:'100px',marginLeft:'250px'}}>
        <Grid item xs={8}>
          
        <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>Project Details</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell style={{color:'white',fontSize:'15px'}}>Project Topic</StyledTableCell>
            
            <StyledTableCell style={{color:'white'}} align="left">Project Description</StyledTableCell>
            <StyledTableCell style={{color:'black'}}  align="right">.</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="right">.</StyledTableCell>
            <StyledTableCell style={{color:'black'}}  align="right">.</StyledTableCell>
          
          
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row) => (
            // changed --key error
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.topic}
              </StyledTableCell>
              <StyledTableCell style={{color:'black'}} align="left">{row. description}</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="left"></StyledTableCell>

              <StyledTableCell>  <button onClick={()=>updateProject(row)} style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>EDIT</button></StyledTableCell>
              <StyledTableCell>  <button onClick={()=>deleteProject(row._id)} style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>DELETE</button></StyledTableCell>
              
             
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <div style={{textAlign:'center'}}><button style={{  margin:'5px', padding:'5px',fontSize:'14px',backgroundColor:'black',color:'white'} }>ADD PROJECT TOPIC</button> </div> */}
        </Grid>
        </Grid>
    </Box>
    )


    let finalJSX1=(
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} style={{marginTop:'100px',marginLeft:'250px'}}>
        <Grid item xs={8}>
          <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>Mentor Details</Typography>
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{color:'white'}}>Name</StyledTableCell>
            
            <StyledTableCell style={{color:'white'}} align="left">Email</StyledTableCell>
            <StyledTableCell style={{color:'white'}} align="left">Phone Number</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="left">hi</StyledTableCell>
            <StyledTableCell style={{color:'black'}} align="left">hi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset1.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
            
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell>  <button onClick={()=>updateMen(row)} style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>EDIT</button></StyledTableCell>
              <StyledTableCell>  <button onClick={()=>deleteMen(row._id)} style={{  margin:'5px', padding:'5px',fontSize:'12px',backgroundColor:'black',color:'white'} }>DELETE</button></StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>

      
      </Table>
      
    </TableContainer>
 
    {/* <div style={{textAlign:'center'}}><button style={{  margin:'5px', padding:'5px',fontSize:'14px',backgroundColor:'black',color:'white'} }>ADD MENTOR</button>  */}

{/* </div> */}
        </Grid>
        
      </Grid>
    </Box>
    )
    
    if(update1) finalJSX1=<AddProjectForm method='put'data={value1}/>   
 if(update) finalJSX=<AddMentorForm method='put'data={value}/> 


 
 
  return (
    <div>
      <SideBarAdmin/>
   
     <div >
   
   {finalJSX}
   {finalJSX1}


    //  {/* <AdminFooter/> */}
    * <Typography variant="body2" color="black" style={{textAlign:'center',marginTop:'200px'}}>
       {'Copyright © '}
      <Link color="inherit" href="https://ictkerala.org/">
      ICT ACADEMY OF KERALA  
      </Link>{'        '}
    
      {new Date().getFullYear()}
      {'.'}
     </Typography> 
    </div>
    </div>
    )
 

   
   
  
}

export default AdminDashboard