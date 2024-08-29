import React, { useState } from 'react';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import '../css/Aside.css';
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";

function Aside() {
    const [currentPage, setCurrentPage] = useState("home");

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "skills":
                return <Skills />;
            case "about":
                return <About />;
            case "about":
                return <Portfolio />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <>
            <div className="aside">
                <div className="logo">
                    <a href="#"> 
                        <span>Matheus</span>
                    </a>
                </div>
                    <div className="nav-toggler">
                        <span></span>
                    </div>
                    <ul className="nav">
                        <li>
                            <a href="#" className={currentPage === "home" ? "active" : ""} onClick={() => handlePageChange("home")}>
                                <i><FaHome /></i>Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className={currentPage === "about" ? "active" : ""} onClick={() => handlePageChange("about")}>
                                <i><FaInfo /></i>About
                            </a>
                        </li>
                        <li>
                            <a href="#" className={currentPage === "skills" ? "active" : ""} onClick={() => handlePageChange("skills")}>
                                <i><MdDesignServices /></i>Skills
                            </a>
                        </li>
                        <li>
                            <a href="#" className={currentPage === "Portfólio" ? "active" : ""} onClick={() => handlePageChange("Portfólio")}>
                                <i><SlScreenDesktop /></i>Portfólio
                            </a>
                        </li>
                        <li>
                            <a href="#" className={currentPage === "Contact" ? "active" : ""} onClick={() => handlePageChange("Contact")}>
                                <i><FaPhoneAlt /></i>Contact
                            </a>
                        </li>
                        
                    </ul>
            </div>

            {renderPage()}
        </>
    );
}

export default Aside;
