import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <img src="./images/wavesOpacity.svg" alt="headerWaves" className="headerWaves"/>
            <div className="navbar-container">
                <div className="logo">
                    <span className="logo-text">Medha Verma</span>
                </div>
                
                <div className={`desktopMenu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link 
                        to="intro" 
                        className="desktopMenuListItem" 
                        smooth={true} 
                        duration={500}
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                    <Link 
                        to="experience" 
                        className="desktopMenuListItem" 
                        smooth={true} 
                        duration={500}
                        onClick={closeMobileMenu}
                    >
                        Experience
                    </Link>
                    <Link 
                        to="projects" 
                        className="desktopMenuListItem" 
                        smooth={true} 
                        duration={500}
                        onClick={closeMobileMenu}
                    >
                        Personal Projects
                    </Link>
                    <Link 
                        to="skills" 
                        className="desktopMenuListItem" 
                        smooth={true} 
                        duration={500}
                        onClick={closeMobileMenu}
                    >
                        Skills
                    </Link>
                    <Link 
                        to="contact" 
                        className="desktopMenuListItem" 
                        smooth={true} 
                        duration={500}
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </Link>
                </div>

                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
