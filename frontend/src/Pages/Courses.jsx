import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

const Courses = () => {
  return (
    <>
  <Navbar/>
  {/* Header Start */}
  <div>
  <div class="px-4 py-5 text-center title-header">
          <h1 className=" m-5 text-dark">
            Courses
          </h1>
        </div>
      </div>
  {/* Header End */}

  <Course/>

 <Footer/> 
</>

  )
}

export default Courses