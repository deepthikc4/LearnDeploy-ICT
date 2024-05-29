import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { TextField } from "@mui/material";
import NavbarAdmin from "./NavbarAdmin";
import AdminFooter from "../components/AdminFooter";
import axiosInstance from '../axiosinstance'

const SubmissionsPage = () => {
  const { name } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axiosInstance.get(`http://localhost:3005/api/studentdetails/${name}`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((error) => {
        console.error('Error fetching submission:', error);
      });
  }, [name]);

  const updateEvaluationStatus = async (id, evaluationStatus) => {
    try {
      const updatedStudents = students.map(student => {
        if (student._id === id) {
          return { ...student, EvaluationStatus: evaluationStatus };
        }
        return student;
      });

      setStudents(updatedStudents);

      await axiosInstance.put(`http://localhost:3005/api/students/${id}`, { EvaluationStatus: evaluationStatus });
    } catch (error) {
      console.log(error);
    }
  };

  const updateMarks = async (id, marks) => {
    try {
      const updatedStudents = students.map(student => {
        if (student._id === id) {
          return { ...student, marks: marks };
        }
        return student;
      });

      setStudents(updatedStudents);

      await axiosInstance.put(`http://localhost:3005/api/students/${id}`, { marks: marks });
    } catch (error) {
      console.log(error);
    }
  };

  const updateComments = async (id, comments) => {
    try {
      const updatedStudents = students.map(student => {
        if (student._id === id) {
          return { ...student, comments: comments };
        }
        return student;
      });

      setStudents(updatedStudents);

      await axiosInstance.put(`http://localhost:3005/api/students/${id}`, { comments: comments });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarAdmin />

      <div>
        <h3 style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px', color: 'black' }}>Submission by - {name}</h3>
        <table>
          <thead>
            <tr>
              <th style={{ alignItems: 'center', padding: "10px" }}>Submission Link</th>
              <th style={{ alignItems: 'center', padding: "10px" }}>Evaluation Status</th>
              <th style={{ alignItems: 'center', padding: "10px" }}>Marks</th>
              <th style={{ alignItems: 'center', padding: "10px" }}>Comments</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td style={{ alignItems: 'center', padding: "10px" }}><a href={student.SubmissionLink}>{student.SubmissionLink}</a></td>
                <td style={{ alignItems: 'center', padding: "10px" }}>
                  <select value={student.EvaluationStatus} onChange={e => updateEvaluationStatus(student._id, e.target.value)}>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
                <td style={{ alignItems: 'center', padding: "10px" }}>
                  <input type="text" value={student.marks} onChange={e => updateMarks(student._id, e.target.value)} />
                </td>
                <td style={{ alignItems: 'center', padding: "10px" }}>
                  <input type="text" value={student.comments} onChange={e => updateComments(student._id, e.target.value)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AdminFooter />
    </>
  );
}

export default SubmissionsPage;
