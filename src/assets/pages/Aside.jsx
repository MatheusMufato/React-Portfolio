import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import '../css/Aside.css'

const Aside = () => {
    return (
        <div className="aside">
            <div className="logo">
                <a href="#">
                    <span>   Matheus    </span></a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li><a href="#home" className="active"><i><FaHome /></i> Home </a></li>
                <li><a href="#about"><i><FaInfo /></i>About</a></li>
                <li><a href="#services"><i><MdDesignServices /></i> Services</a></li>
                <li><a href="#portfolio"><i><SlScreenDesktop /></i>Portfolio</a></li>
                <li><a href="#contact"><i><FaPhoneAlt /></i>Contact </a></li>
            </ul>
        </div>
    
    )
}

export default Aside