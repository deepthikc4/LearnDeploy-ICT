import logo from './logo.svg';
import './App.css';
import AdminDashboard from './Admin/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import AddMentorForm from './Admin/AddMentorForm';
import AddProjectForm from './Admin/AddProjectForm';
import Login from './components/Login';
import Courses from './Pages/Courses';
import Carrers from './Pages/Carrers';
import Contact from './Pages/Contact';
import About from './Pages/About';


// import { Home } from '@mui/icons-material';
import Home from './Pages/Home';

import MentorDash from './Mentor/MentorDash';
import SubmissionList from './Mentor/SubmissionList';
import SubmissionsPage from './Mentor/SubmissionsPage';
import ReferenceMaterial from './Mentor/ReferenceMaterial';
import PrivateRoutes from './PrivateRoutes';
 




function App() {
  return (
   

   <div>

      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/carrers' element={<Carrers />} />
        <Route path='/contact' element={<Contact/>} />
        <Route element= {<PrivateRoutes />}>
        <Route path="/submissionlist/:mentorname"element={<SubmissionList/>}/>
        <Route path={'/admindashboard'} element={<AdminDashboard/>}/>      
        <Route path={'/projectform'} element={<AddProjectForm method="post" data={{topic:'',description:'',image:'',mentor:''}}/>}/>
        <Route path={'/mentorform'} element={<AddMentorForm method="post" data={{name:'',email:'',phoneNumbe:'',password:'',projectTopics:['']}}/>}/>
        <Route path="/mentordashboard/:mentorname" element={<MentorDash/>} />
        <Route path="/submissionlist/:mentorname"element={<SubmissionList/>}/>
        <Route path="/viewsubmissions/:name" element={<SubmissionsPage/>}/>
        <Route path="/materialview" element={<ReferenceMaterial/>}/>
        </Route>
      </Routes>
   
    </div>
  );
}

export default App;
