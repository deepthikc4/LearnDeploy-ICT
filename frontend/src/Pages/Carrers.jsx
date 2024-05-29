import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../navbar.css";

const Carrers = () => {
  return (
    <div>
      <Navbar />

      {/* Carrers Start */}
      <div>
        <div class="px-4 py-5 text-center carrers">
          <h2 className="title-carrers mb-4 text-white">
            Find the carrers of your dreams
          </h2>
          <h1 className="display-5 text-body-emphasis text-center m-4 align-center text-white">
            We're more than just a workplace. We're a family.
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-white fw-5">
              We know that finding a meaningful and rewarding job can be a long
              journey. Our goal is to make that process as easy as possible for
              you, and to create a work environment that's satisfying - one
              where you'll look forward to coming to every day. Start your
              journey with us by browsing available jobs.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2 mb-5">
              <button type="button" className="btn btn-dark btn-lg px-4 gap-3">
                View Openings
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <h6 className="display-5 text-body-emphasis text-center mt-5 m-1 align-center text-dark">
            Join Us
          </h6>
          <p className="text-center mb-4">Current Openings</p>
          <div className="search">
          <p className="fw-bold text-dark">Filter by:</p>
          <input type="search" className="mb-4 ms-auto" placeholder="Search" aria-label="Search"></input>
          </div>
          <div className=" border-bottom"></div>
          <h5 className="m-5">
            Currently we don't have any open jobs at ICT Academy of Kerala.
            Check out our page sometime later.
          </h5>
          <div className=" border-bottom"></div>
          <div className="text-center mt-3">
            <a href="/" className="text-info">View website</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Carrers;
