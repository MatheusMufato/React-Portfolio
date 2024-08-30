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
                    <div className="Title">
                        <h1>Iphone 15 Pro</h1>
                    </div>
                </div>

                <div className="MidSection">
                    <div className="Title">
                        <h1>Iphone 15 </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teste