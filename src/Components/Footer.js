import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="social-icons mb-4">
              <a  target='_blank' className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a  target='_blank' className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a  target='_blank' className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="mb-4">
              <h5>Contact Us</h5>
              <p>E-mail: compute.clinic@yahoo.com</p>
              <p>Phone: +237  *** ** ** **</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/Home" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Case" className="footer-link">
                    Generate A Clinical Case
                  </Link>
                </li>
                <li>
                  <Link to="/History" className="footer-link">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/Profile" className='footer-link'>
                    Profile
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
  <div className="mb-4">
    <h5>Leave a Comment</h5>
    <form>
      <div className="mb-3">
        <label htmlFor="commenterName" className="form-label">Your Name</label>
        <input type="text" id="commenterName" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="mb-3">
        <label htmlFor="commentText" className="form-label">Your Comment</label>
        <textarea id="commentText" className="form-control" rows="4" placeholder="Write your comment here"></textarea>
      </div>
      <button className="btn btn-primary" type="submit">Submit Comment</button>
    </form>
  </div>
</div>

        </div>

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
