import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      {/* Header Start */}
      <div class="px-4 py-5 text-center title-header">
          <h1 className=" m-5 text-dark">
            About Us
          </h1>
        </div>
      <div>
      </div>
      {/* Header End */}
      <AboutUs />
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">Our Leading Instructors</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/instructor-1.jpg" style={{height: "300px"}} alt="instructor-image" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-whatsapp" />
                    </a>
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Alina Branton</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/instructor-2.jpg" style={{height: "300px"}} alt="instructor-image" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-whatsapp" />
                    </a>
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Michael Ebin</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/instructor-3.jpg" style={{height: "300px"}} alt="instructor-image" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-whatsapp" />
                    </a>
                    <a className="btn btn-sm-square btn-dark mx-1" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Aleena Elizabeth</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      <Footer />
    </>
  );
};

export default About;
