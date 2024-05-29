import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import AdminFooter from "../components/AdminFooter";
import NavbarAdmin from "./NavbarAdmin";
import axiosInstance from '../axiosinstance'

const SubmissionList = () => {

  // filter
 
  const [filteredSub, setFilteredSub] = useState([]);
  const [topicFilter, setTopicFilter] = useState('');
  const [batchFilter, setBatchFilter] = useState('');

  // filter ends
  const [sub, setSubmission] = useState([]);
  const { mentorname } = useParams();
  const navigate=useNavigate();
 

  
  useEffect(() => {
    axiosInstance.get(`http://localhost:3005/api/submissions/${mentorname}`).then((res) => {
      setSubmission(res.data);    
      setFilteredSub(res.data);
    }).catch((error) => {
      console.error('Error fetching submissions:', error);
    });
  },[mentorname]);

  


//  filter
  const handleTopicFilterChange = (event) => {
    const value = event.target.value;
    setTopicFilter(value);
    filterSubmissions(value, batchFilter);
  };

  const handleBatchFilterChange = (event) => {
    const value = event.target.value;
    setBatchFilter(value);
    filterSubmissions(topicFilter, value);
  };
const filterSubmissions = (topic, batch) => {
    let filteredData = sub;
    if (topic) {
      filteredData = filteredData.filter(project => project.topic.toLowerCase().includes(topic.toLowerCase()));
      console.log(filteredData);
    }
    if (batch) {
      console.log(batch);
      console.log(filteredData);
      filteredData = filteredData.filter(project => project.Batch.toLowerCase().includes(batch.toLowerCase()));
      // filteredData = filteredData.filter(project => project.submissions.some(submission => submission.Batch === batch));
     
      console.log(filteredData); 
    }
    setFilteredSub(filteredData);
  };

// filter end

 
const viewSubmission=(SubmissionName)=>{
const name=SubmissionName;
navigate(`/viewsubmissions/${name}`);

} 
// delete Submission

const deleteSubmission=(pid,sid)=>{
  axiosInstance.put('http://localhost:3005/api/updateSub',{pid,sid}).then((res)=>{
    alert(res.data.message);
    console.log(res.data);
    window.location.reload(false);
        })
        .catch((error)=>{
          console.log(error);
        })
 }



  return (
    <>
    <NavbarAdmin/>
    <div>
      <br></br>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "Times New Roman",
          textDecoration: "underline",
        }}
      >
        SUBMISSION LIST
      </Typography>
      <br></br>
{/* filter starts here */}

<br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FormControl variant="outlined" style={{ marginRight: 10 }}>
          <InputLabel>Topic</InputLabel>
          <Select
            value={topicFilter}
            onChange={handleTopicFilterChange}
            label="Topic"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Blog Application">Blog Application</MenuItem>
            <MenuItem value="Student Application">Student Application</MenuItem>
            {/* Add more topics as needed */}
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Batch</InputLabel>
          <Select
            value={batchFilter}
            onChange={handleBatchFilterChange}
            label="Batch"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="KKEM March CSA">KKEM March CSA</MenuItem>
            <MenuItem value="KKEM March FSD">KKEM March FSD</MenuItem>
            {/* Add more batches as needed */}
          </Select>
        </FormControl>
        </div>
      <br />


{/* filter ends here */}

      <TableContainer component={Paper} style={{ alignContent: "center" }}>
    
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        {/* <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{
            // width: "800px",
            marginLeft: "300px",
            border: "1px solid blue"
          }}
        > */}
          <TableHead>
            <TableRow>
              
         
              <TableCell style={{ backgroundColor: "black",color:'white' }}>Name</TableCell>             
              <TableCell style={{ backgroundColor: "black",color:'white' }}>Evaluation Status</TableCell>
              <TableCell style={{ backgroundColor: "black" ,color:'black'}}>Actions</TableCell>
              <TableCell style={{ backgroundColor: "black", color:'black' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSub.map((project, index) => (
               project.submissions.map((submission, subIndex) => (
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "inherit",
                }}
                key={`${index}-${subIndex}`}
              >
               
                <TableCell>{submission.Name}</TableCell>
                
                <TableCell>{submission.EvaluationStatus}</TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "black", color: "white" }}
                    onClick={() => viewSubmission(submission.Name)}
                  >
                    
                    ASSESS
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "black", color: "white" }}
                    onClick={()=>deleteSubmission(project._id,submission.ID,)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
           )) ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <AdminFooter/>
    </>
  );
}

export default SubmissionList;