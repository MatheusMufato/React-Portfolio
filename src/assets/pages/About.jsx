import React from 'react'
import '../css/About.css'

const About = () => {
    return (

                            <section className="about section" id="about">
                                <div className="container">
                                    <div className="row">
                                        <div className="section-title padd-15">
                                            <h2>About Me</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="about-content padd-15">
                                            <div className="row">
                                                <div className="about-text padd-15">
                                                    <h3>Hello There, I'm Matheus </h3>
                                                        <p>I'm 21 years old and I'm a Computer Engineering student at Uniara (Universidade de Araraquara).</p>
                                                        <p>I current live in Araraquara, São Paulo, and i work as a freelancer in my spare time during my studies, always aiming to expand my knowledge of new technologies and programming languages.
                                                            Currently I've been working with front-end, creating websites, web designs, and some other things...</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="personal-info padd-15">
                                                    <div className="row">                                    {/* Reformular informaçoes */}
                                                        <div className="info-item padd-15">            
                                                            <p>Birthday : <span>30 Apr 2003</span></p>
                                                        </div>
                                                        <div className="info-item padd-15">
                                                            <p>Age : <span>20 years</span></p>
                                                        </div>
                                                        <div className="info-item padd-15">
                                                            <p>Phone : <span>+55 19 99616-8273</span></p>
                                                        </div>
                                                        <div className="info-item padd-15">
                                                            <p>Email : <span>mmufato@gmail.com</span></p>
                                                        </div>
                                                        <div className="info-item padd-15">
                                                            <p>Country : <span>Brazil</span></p>
                                                        </div>
                                                        <div className="info-item padd-15">
                                                            <p>Freelancer : <span className="freelancer">Available</span></p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="skills padd-15">
                                                    <div className="row">
                                                        <div className="skill-item padd-15">
                                                            <h5>HTML</h5>
                                                            <div className="progress">
                                                                <div className="progress-in" ></div>
                                                                <div className="skill-percent">89%</div>
                                                            </div>
                                                        </div>
                                                        <div className="skill-item padd-15">
                                                            <h5>CSS</h5>
                                                            <div className="progress green">
                                                                <div className="progress-in" ></div>
                                                                <div className="skill-percent">86%</div>
                                                            </div>
                                                        </div>
                                                        <div className="skill-item padd-15">
                                                            <h5>JS</h5>
                                                            <div className="progress blue">
                                                                <div className="progress-in" ></div>
                                                                <div className="skill-percent">27%</div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="row">
                                                <div className="education padd-15">
                                                    <h3 className="title">Education</h3>
                                                        <div className="row">
                                                            <div className="timeline-box padd-15">
                                                                <div className="timeline shadow-dark">
                                                                    <div className="timeline-item">
                                                                        <div className="circle-dot"></div>
                                                                        <h3 className="timeline-date">
                                                                            <i className="fa fa-calendar"></i> <span> </span> 2017 - 2020
                                                                        </h3>
                                                                        <h4 className="timeline-title">High school graduation</h4>
                                                                        <p className="timeline-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt incidunt consequatur voluptatibus ipsum molestiae iste voluptatum atque, vero sapiente.</p>
                                                                    </div>
                                                                    <div className="timeline-item">
                                                                        <div className="circle-dot"></div>
                                                                        <h3 className="timeline-date">
                                                                            <i className="fa fa-calendar"></i> <span> </span> 2021 - 2025
                                                                        </h3>
                                                                        <h4 className="timeline-title">College graduation</h4>
                                                                        <p className="timeline-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt incidunt consequatur voluptatibus ipsum molestiae iste voluptatum atque, vero sapiente.</p>
                                                                    </div>
                                                                

                                                                </div>
                                                            </div>
                                                        </div>
                                            </div>
                                                <div className="experience padd-15">
                                                    <h3 className="title">Experience</h3>
                                                    <div className="row">
                                                        <div className="timeline-box padd-15">
                                                            <div className="timeline shadow-dark">

                                                                <div className="timeline-item">
                                                                    <div className="circle-dot"></div>
                                                                    <h3 className="timeline-date">
                                                                        <i className="fa fa-calendar"></i>  <span> </span>2022
                                                                    </h3>
                                                                    <h4 className="timeline-title">Started work as freelancer</h4>
                                                                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt incidunt consequatur voluptatibus ipsum molestiae iste voluptatum atque, vero sapiente.</p>
                                                                </div>

                                                                <div className="timeline-item">
                                                                    <div className="circle-dot"></div>
                                                                    <h3 className="timeline-date">
                                                                        <i className="fa fa-calendar"></i>  <span> </span>2023
                                                                    </h3>
                                                                    <h4 className="timeline-title">Motus Marketing</h4>
                                                                    <p className="timeline-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt incidunt consequatur voluptatibus ipsum molestiae iste voluptatum atque, vero sapiente.</p>
                                                                </div>
                                                            

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
    )
}

export default About