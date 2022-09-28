import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <>
        <footer className="site-footer">
      <div className="container containerBG starsBG">
        <div className="row flex justify-center">

          <div className="col-xs-6 col-md-3">
            <h6>Contact</h6>
            <ul className="footer-links">
              <li><a href="#">Address : </a></li>
              <li><a href="#">Puzzle Break Belltown 2124 2nd</a></li>
              <li><a href="#">Ave Seattle, WA 981121</a></li>
              <li><a href="#">Phone : (855)816-5838</a></li>
              <li><a href="#">Email : info@puzzlebreak.com</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Our Services</h6>
            <ul className="footer-links">
              <li><a href="#">You Come to Us</a></li>
              <li><a href="#">We Come to You Virtually</a></li>
              <li><a href="#">We Come to You in Person/Hybrid</a></li>
             
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Seattle Tickets</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
             
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container containerBG">
        <div className="row flex justify-center">

          <div className=" flex col-md-4 col-sm-6 col-xs-12 ">
            <ul className="social-icons flex gap-4">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        
        </>
    )
}
export default Footer