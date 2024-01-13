import React from 'react';
import linkedin from "../../icons/linkedin.png";
import gmail from "../../icons/gmail.png";
import contactData from "../../assets/data.json";
import "./contacts.css";

function Contacts() {
    return (
        <section id="contact" className="contact-container">
            <p className="title">Get in Touch</p>
            <p className="section__text__p1">{contactData.ContactMe.contactPara}</p>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src={gmail}
                        alt="Gmail icon"
                        className="icon contact-icon email-icon"
                    />
                    <p className='contact-text'>
                        <a href="mailto:medhaverma15@gmail.com"  rel="noopener noreferrer" target='_blank'>medhaverma15@gmail.com</a>
                    </p>
                </div>
                <div className="contact-info-container">
                    <img
                        src={linkedin}
                        alt="LinkedIn icon"
                        className="icon contact-icon linkedin-icon"
                    />
                    <p className='contact-text'>
                        <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer" style={{ color: 'blue' }}>LinkedIn</a>
                    </p>

                </div>
            </div>
        </section>
    );
}

export default Contacts;
