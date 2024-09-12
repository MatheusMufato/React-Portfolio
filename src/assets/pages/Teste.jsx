import React from 'react'
import '../css/Sub-pages/Iphone.css'
import Full from '../images/Full.png'
import { IoReturnDownBack } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiMonitor } from "react-icons/ci";

const Teste = () => {
    return (
        <section className='Iphone section imageFadeIn'>
            <div className="Image-container">
                <div className="Image">
                    <img src={Full} alt="FullSite" className='imageFadeIn'/>
                </div>
            </div>
            <div className="InfoContainer">
                <div className="MidSection">
                    <div className="Title">
                        <h1>Iphone 15 Pro</h1>
                    </div>
                    
                    <div className="Description info">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tortor ut. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tortor ut. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tortor ut. 
                        </p>
                    </div>

                    <div className="Git info">
                        <p className='TextLink'>
                            <FaGithub className='Icon'/>
                                Code: 
                            <a href="https://github.com/MatheusMufato/Iphone-15-website" className='Link' target='black'>
                                github.com/MatheusMufato/Iphone-15-website
                            </a>
                        </p>
                        
                    </div>

                    <div className="Site info">
                        <p className='TextLink'>
                            <CiMonitor className='Icon'/>
                                Webiste: 
                            <a href="https://iphone15-40775.web.app" className='Link' target='black'>
                                iphone15-40775.web.app
                            </a>
                        </p>
                    </div>
                    
                    
                </div>

            </div>
        </section>
    )
}

export default Teste