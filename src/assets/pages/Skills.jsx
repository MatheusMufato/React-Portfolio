import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import '../css/Skills.css'

const Skills = () => {
    return (

    <section className="service section" id="services">
        <div className="container">
            <div className="row">
                <div className="section-title padd-15">
                    <h2>Skills  </h2>
                </div>
            </div>
            <div className="row">

                <div className="services-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon icon1">
                            <i><FaHtml5 /></i>
                        </div>
                        <h4>HTML</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae.</p>
                    </div>
                </div>

                <div className="services-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon icon2">
                            <i><FaCss3 /></i>
                        </div>
                        <h4>Css</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae.</p>
                    </div>
                </div>


                <div className="services-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon icon3">
                            <i><IoLogoJavascript /></i>
                        </div>
                        <h4>JavaScript</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae.</p>
                    </div>
                </div>
            
                <div className="services-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon icon4">
                            <i><FaReact /></i>
                        </div>
                        <h4>React</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae.</p>
                    </div>
                </div>

                <div className="services-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i><FaC /></i>
                        </div>
                        <h4>C / C++</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae.</p>
                    </div>
                </div>

                <div className="services-item padd-15">
                    <div className="service-item-inner">
                        <div className="icon">
                            <i><FaGithub /></i>
                        </div>
                        <h4>GitHub</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, molestiae.</p>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
    )
}

export default Skills