import React from 'react'
import '../css/Portfolio.css'
import IphoneWeb from '../images/iphone-web.png'

const Portfolio = () => {
    
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfólio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My Last Projects : </h2>
                    </div>
                </div>
                <div className="row">
                    
                        <div className="portfolio-item padd-15">
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a href="">
                                        <img alt="Iphone-Webiste" src={IphoneWeb}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="">
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="#">
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <a href="">
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                
                
                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img">
                            <a href="">
                                
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="portfolio-item padd-15">
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img">
                            <a href="">
                                    
                                </a>
                        </div>
                    </div>
                </div>
                

                </div>

            </div>
        </section>
    )
}

export default Portfolio