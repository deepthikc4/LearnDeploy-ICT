import React, { useState } from 'react';
import { TextField, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addproject = () => {
  const navigate = useNavigate();

  const [projectTopic, setProjectTopic] = useState('');

  const addHandler = () => {
    console.log("clicked", projectTopic);
    axios
      .post("#", { projectTopic }) // Assuming the endpoint and data structure
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          alert("Project added successfully");
          navigate("/admindash");
        } else {
          alert("Project adding failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleProjectTopicChange = (e) => {
    setProjectTopic(e.target.value);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h4' align='center' gutterBottom style={{ color: '#333333', fontWeight: 'bold' }}>
        Project Topics
      </Typography>
      <Grid container spacing={2} style={{ width: '100%', maxWidth: '400px' }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Project Topic"
            variant="outlined"
            multiline
            rows={3}
            value={projectTopic}
            onChange={handleProjectTopicChange}
            style={{ marginBottom: '20px' }}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={addHandler}
        style={{ width: '50%', maxWidth: '200px', marginBottom: '20px',color:'black' }}
      >
        Add
      </Button>
    </div>
  );
};

export default Addproject;