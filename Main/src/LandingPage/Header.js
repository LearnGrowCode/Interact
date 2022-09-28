import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

// <Link to='/search' className=' hover:text-yellow-200 bg-black p-2'>SearchPage</Link>
//     <Link to='/profile' className=' hover:text-yellow-200 bg-black p-2' >Profile Page</Link>
//     <Link to='/create/profile' className=' hover:text-yellow-200 bg-black p-2' >Create Profile Page</Link>
//     <Link to='/home' className=' hover:text-yellow-200 bg-black p-2' >Home</Link>
//     <Link to='/contact' className=' hover:text-yellow-200 bg-black p-2' >Contact</Link>
function Header() {
  return (
    <>
      <div className="outer_box">
        <div className="logo">
          <Link to="/">
            <div className="nav_logo" />
          </Link>
        </div>
        <div>
          <ul className="nav-ul">
            <li className="nav-item">
              <Link to="/search" className=' hover:text-yellow-200 bg-black p-2'>Find Teammates</Link>
            </li>
            <li className="nav-item">Log-in</li>
            <li className="nav-item">
              <Link to="/contact/" className=' hover:text-yellow-200 bg-black p-2'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
