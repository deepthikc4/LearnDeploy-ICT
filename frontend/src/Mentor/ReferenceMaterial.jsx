
import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';

import AddMaterial from './AddMaterial';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import AdminFooter from '../components/AdminFooter';
import axiosInstance from '../axiosinstance'

const ReferenceMaterial = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = () => {
    axiosInstance.get('http://localhost:3005/api/reference-material')
      .then((res) => {
        setMaterials(res.data);
      })
      .catch((error) => {
        console.error('Error fetching reference materials:', error);
      });
  };

  const deleteMaterial = (id) => {
    axiosInstance.delete('http://localhost:3005/api/reference-material/'+id)
      .then(() => {
        alert('Reference material deleted successfully');
        fetchMaterials();
      })
      .catch((error) => {
        console.error('Error deleting reference material:', error);
      });
  };

  const addMaterial = (newMaterial) => {
    setMaterials([...materials, newMaterial]);
  };

  return (
    <>
      <NavbarAdmin/>
      <AddMaterial addMaterial={addMaterial} />
      <div style={{ margin: '7%' }}>
        <Grid container spacing={2}>
          {materials.map((material) => (
            <Grid item xs={12} sm={6} md={4} key={material._id}>
              <Card sx={{ minWidth: 275 ,border:'1px solid black'}}>
                <CardContent>
                  <Typography variant='h5' component='div'>
                    Title:{material.title}
                  </Typography>
                  <Typography variant='body1'>
                   Description: {material.description}
                  </Typography>
                  <Typography variant='body2'>
                    Link: {material.link}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    variant='contained'
                   color='inherit'
                    onClick={() => deleteMaterial(material._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <AdminFooter/>
    </>
  );
};

export default ReferenceMaterial;