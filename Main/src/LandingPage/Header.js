import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";

function Header() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
              <Link to="/search" className='hover:text-yellow-200'>Find Teammates</Link>
            </li>
            {isAuthenticated ? (
              <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </button>
              </div>
            ) : (
              <li className="nav-item">
                <button onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
            <li className="nav-item">
              <Link to="/contact/" className='hover:text-yellow-200'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
