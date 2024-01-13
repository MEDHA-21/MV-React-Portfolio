import React from "react";
import "./navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="./images/wavesOpacity.svg" alt="footerWaves" className="headerWaves"/>
            <div className="logo">Medha Verma</div>
            <div className="desktopMenu">
                <Link to="intro" className="desktopMenuListItem" smooth={true} duration={500}>About</Link>
                <Link to="skills" className="desktopMenuListItem" smooth={true} duration={500}>Skills</Link>
                <Link to="experience" className="desktopMenuListItem" smooth={true} duration={500}>Experience</Link>
                <Link to="projects" className="desktopMenuListItem" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" className="desktopMenuListItem" smooth={true} duration={500}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
