import React from 'react'

const Footer = () => {
  return (
    <><>
    {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              {" "}
              <a href="#">
                ICTAK
              </a>
              {" "} © 2021 Company, Inc. All rights reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
              </div>
            </div>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-whatsapp" />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
  </>
  </>
  )
}

export default Footer