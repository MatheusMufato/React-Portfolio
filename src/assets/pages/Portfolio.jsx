    import React, { useState } from 'react';
    import '../css/Portfolio.css';
    import IphoneWeb from '../images/iphone-web.png';
    import Iphone from './Sub-pages/IphoneSite';
    import { IoMdCloseCircle } from "react-icons/io";

    const Portfolio = () => {
        const [showModal, setShowModal] = useState(false);
        const [selectedModal, setSelectedModal] = useState(null);
        const [showCloseButton, setShowCloseButton] = useState(false);

        const handleImageClick = (modal) => {
            setSelectedModal(modal);
            setShowModal(true);
            setShowCloseButton(true);
        };

        const handleCloseModal = () => {
            setShowModal(false);
            setShowCloseButton(false);
        };

        return (
            <section class="portfolio section" id="portfolio">
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

                        <div className="portfolio-item padd-15" onClick={() => handleImageClick('Iphone')}>
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a>
                                        <img alt="Iphone-Webiste" src={IphoneWeb} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" onClick={() => handleImageClick('Iphone2')}>
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a>
                                        <img alt="Iphone-Webiste" src={IphoneWeb} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" onClick={() => handleImageClick('Iphone')}>
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a>
                                        <img alt="Iphone-Webiste" src={IphoneWeb} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" onClick={() => handleImageClick('Iphone')}>
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a>
                                        <img alt="Iphone-Webiste" src={IphoneWeb} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" onClick={() => handleImageClick('Iphone')}>
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a>
                                        <img alt="Iphone-Webiste" src={IphoneWeb} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" onClick={() => handleImageClick('Iphone')}>
                            <div className="portfolio-item-inner shadow-dark">
                                <div className="portfolio-img">
                                    <a>
                                        <img alt="Iphone-Webiste" src={IphoneWeb} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>

                {showModal && selectedModal === 'Iphone' && (
                    <>
                        <Iphone />
                        {showCloseButton && (
                            <a className='closeBtn' onClick={handleCloseModal}><IoMdCloseCircle /></a>
                        )}
                    </>
                )}
            </section>
        );
    };

    export default Portfolio;
