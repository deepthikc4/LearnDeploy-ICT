import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
// import axiosInstance from '../axiosInterceptor';
import axios from 'axios';
import axiosInstance from '../axiosinstance'

const AddMaterial = ({ addMaterial }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axiosInstance.post('http://localhost:3005/api/addreference-material', { title, description, link })
      .then((res) => {
        addMaterial(res.data);
        setOpen(false);
        // Reset input fields
        setTitle('');
        setDescription('');
        setLink('');
      })
      .catch((error) => {
        console.error('Error adding reference material:', error);
      });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div>
     <div>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Add New Material</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            {/* Enter the details of the reference material: */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            margin="dense"
            label="Link"
            type="text"
            fullWidth
            value={link}
            onChange={handleLinkChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Cancel
          </Button>
          <Button onClick={handleSubmit} >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
    <Button variant="outlined" onClick={handleClickOpen} style={{marginTop:'100px',marginLeft:"500px",color:'white',backgroundColor:'black'}}>
        Add new Reference Material
      </Button>
      </div>
  );
};

export default AddMaterial;
