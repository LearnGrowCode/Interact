import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
    return (
        <>
            

            <div className='outer_box'>
                <div className='logo'>
                    <div className='nav_logo'></div>
                </div>
                <div>
                    <ul className='nav-ul'>
                        <li className='nav-item'>Find Teammates</li>
                        <li className='nav-item'>Log-in</li>
                        <li className='nav-item'><Link to='/contact/'>Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>


        </>
    )
}
export default Header