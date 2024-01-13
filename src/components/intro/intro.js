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
            <div className="introContent">
                <h1 className="introHeading">Hello,</h1>
                <div className="introText">
                    <p>I'm <span className="introName">Medha</span></p>
                    <p>React Developer</p>
                </div>
                <p className="introPara">{data.Intro.introductionStatement}</p>
            </div>
            <div className="btn-container" style={{ textAlign: 'center' }}>
                <button className="btn" onClick={handleDownloadCV}>
                    See My Resume
                </button>
                <Link to="contact" className="btn" smooth={true} duration={500}>
                    Contact Me
                </Link>
            </div>
            <img src={bg} alt="bgimage" className="bg" />
        </section>
    );
};

export default Intro;
