import React from 'react'
import '../css/Sub-pages/Iphone.css'
import Full from '../images/Full.png'
import { IoReturnDownBack } from "react-icons/io5";

const Teste = () => {
    return (
        <section className='Iphone section'>
            <div className="Image-container">
                <div className="Image">
                    <img src={Full} alt="FullSite" className=''/>
                </div>
            </div>
                <div className="Content">
                    <IoReturnDownBack className='Back'/>

                    <h1>Teste</h1>
                </div>
        </section>
    )
}

export default Teste