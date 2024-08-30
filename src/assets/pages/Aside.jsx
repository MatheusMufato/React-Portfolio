import React, { useState } from 'react';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Portfolio from './Portfolio';
import Teste from './Teste.jsx';
import '../css/Aside.css';
import { FaHome,FaInfo,FaPhoneAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";

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
            case "Portfolio":
                return <Portfolio />;
            case "contact":
                return <Contact />;
            case "Teste":
                return <Teste />;
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
                            <a href="#" className={currentPage === "Portfolio" ? "active" : ""} onClick={() => handlePageChange("Portfolio")}>
                                <i><SlScreenDesktop /></i>Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className={currentPage === "Contact" ? "active" : ""} onClick={() => handlePageChange("Contact")}>
                                <i><FaPhoneAlt /></i>Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" className={currentPage === "Teste" ? "active" : ""} onClick={() => handlePageChange("Teste")}>
                                <i></i>Teste
                            </a>
                        </li>
                        
                    </ul>
            </div>

            {renderPage()}
        </>
    );
}

export default Aside;
