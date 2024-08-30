import React from 'react'
import '../css/Sub-pages/Iphone.css'
import Full from '../images/Full.png'
import { IoReturnDownBack } from "react-icons/io5";

const Teste = () => {
    return (
        <section className='Iphone section'>
            <div className="Image-container">
                <div className="Image">
                    <img src={Full} alt="FullSite" className='slide-in-image'/>
                </div>
            </div>
            <div className="InfoContainer">
                <div className="UpSection">
                    <div className="BackBtn">
                        <IoReturnDownBack className='Back'/>
                    </div>
                    
                </div>

                <div className="MidSection">
                    <div className="Title">
                        <h1>Iphone 15 Pro</h1>
                    </div>
                    
                    <div className="Description info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tortor ut. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tortor ut. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tortor ut. </p>
                    </div>

                    <div className="Git info">
                        
                    </div>

                    <div className="Link info">
                        
                    </div>
                    
                    
                </div>

            </div>
        </section>
    )
}

export default Teste