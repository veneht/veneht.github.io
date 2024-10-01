import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
    return(
        <>
        <Helmet title='VEO Veneht | Contact Us'/>
        <div className="contact-form">
            <form>
                <p>Contact Us</p>
                <label for="name">Full Name</label>
                <input id="name" type="text" placeholder="Enter your name" required/><br />
                <label for="email">Email Address</label>
                <input id="email" type="email" placeholder="Enter your Email" required/><br />
                <label for="message">Message</label>
                <textarea id="message" type="text" name="text" placeholder="Enter your message" required /> <br />
                <button>SUBMIT</button>
            </form>
        </div>
        </>
    )
}

export default Contact;