import React from "react";
import "../navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-dark header">
            <img
              style={{ height: "40px", width: "40px" }}
              className="img-fluid me-4"
              src="img/ict logo.png"
              alt="logo-img"
            />
            ICTAK Internship Portal
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link hover">
              Home
            </a>
            <a href="/about" className="nav-item nav-link hover">
              About
            </a>
            <a href="/courses" className="nav-item nav-link hover">
              Courses
            </a>
            <a href="/carrers" className="nav-item nav-link hover">
              Carrers
            </a>
            <a href="/contact" className="nav-item nav-link hover">
              Contact
            </a>
          </div>
          <a
            href="/login"
            className="btn btn-dark py-4 px-lg-5 d-none d-lg-block"
          >
            Login
          </a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
