import React from 'react'
import './contact.css'

function Contact() {
    return (
        <>
            <div className='contact-home'>
                <div className='contact-div-1'>
                    <div className='div-1-head'>CONTACT</div>
                    <div className='div-1-title'>CONTACT <br />US</div>
                    <div className='div-1-bottom'>
                        <p>uditaDesigner420@gmail.com</p>
                        <div className='div-1-bottom-social'>
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='contact-div-2'>
                    <div className='contact-div-2-img'></div>

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" />

                    <label for="lname">Message</label>
                    <textarea type="text" />

                    <input type="submit" value="Submit" />

                </div>
            </div>

        </>
    )
}
export default Contact;