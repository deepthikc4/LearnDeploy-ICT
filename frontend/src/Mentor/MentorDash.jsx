import React, { useState, useEffect } from 'react';
// import MentorNavbar from '../components/MentorNavbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Button, Typography, CardMedia, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import NavbarAdmin from './NavbarAdmin';
import AdminFooter from '../components/AdminFooter';
import axiosInstance from '../axiosinstance';

const MentorDash = () => {
    const [project, setProject] = useState([]);
    // const { mentorId } = useParams();
    const { mentorname } = useParams();
    console.log(mentorname);

    useEffect(() => {
        
        
         axiosInstance.get(`http://localhost:3005/api/mentoProjects/${mentorname}`)
       
            .then(response => {
                setProject(response.data);
            })
            .catch(error => {
                console.error('Error fetching mentor data:', error);
            });
    }, [mentorname]);

    return (
        <>
            <NavbarAdmin />
            <div style={{ marginTop: '30px',marginLeft:"50px" }}>
                <h1>Allotted Projects</h1>
                <Grid container spacing={2}>
       {project.map((val, i) => (
         <Grid item key={i} xs={12} sm={6} md={4}>
           <Card sx={{ maxWidth: 345 }} style={{border:'1px solid purple'}}>
             <CardMedia
               sx={{ height: 200 }}
               image={val.image}  // Specify the image source
              //  title={val.title}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               {val.topic}
               </Typography>
               <Typography variant="body2" color="text.secondary">
               {val.description}
               </Typography>
              
   </CardContent>  
   <div style={{  marginBottom: '10px' }}>
                                <Button variant="contained" color='inherit' style={{marginLeft:'100px'}}>
                                <Link style={{textDecoration:'none',color:'black'}}to={`/submissionlist/${mentorname}`}>VIEW</Link>
                                </Button>
                            </div>
           </Card>
         </Grid>
       ))}
     </Grid>
            </div>
            <AdminFooter/>
        </>
    );
};

export default MentorDash
