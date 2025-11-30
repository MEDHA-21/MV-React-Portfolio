import React from "react";
import bg from "../../icons/bgimage.png";
import "./intro.css";
import data from "../../assets/data.json";
import { Link } from 'react-scroll';

const Intro = () => {
    const handleDownloadCV = () => {
        window.open(data.Intro.DownloadCV, '_blank');
    };

    return (
        <section id="intro">
            <div className="intro-container">
                <div className="introContent">
                    <div className="intro-text-wrapper">
                        <span className="intro-greeting">Hello, I'm</span>
                        <h1 className="intro-name">
                            <span className="gradient-text">Medha Verma</span>
                        </h1>
                        <h2 className="intro-role">
                            <span className="role-text">Frontend React Developer</span>
                            <span className="role-cursor">|</span>
                        </h2>
                        <p className="introPara">{data.Intro.introductionStatement}</p>
                    </div>
                    
                    <div className="btn-container">
                        <button className="modern-btn primary-btn" onClick={handleDownloadCV}>
                            <span className="btn-content">
                                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                See My Resume
                            </span>
                        </button>
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="modern-btn secondary-btn">
                                <span className="btn-content">
                                    <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    Contact Me
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="intro-image-wrapper">
                    <div className="image-backdrop"></div>
                    <img src={bg} alt="Profile" className="bg" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
