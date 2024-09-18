import React from 'react'
import '../css/Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

const handleWhatsappClick = () => {
    window.open('https://wa.me/5519996168273', '_blank');
};

const handleEmailClick = () => {
    window.open('mailto:mmufato@gmail.com', '_blank');
};

const Teste = () => {
        return (
            <section className="contact section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Have you any questions ?</h3>
                    <h4 className="contact-sub-title padd-15">Send me a message!</h4>
                    <div className="row">
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className='fa'><FaWhatsapp /></i>
                            </div>
                            <h4>Call me</h4>
                            <a onClick={handleWhatsappClick}><p>+55 19 99616-8273</p></a>
                        </div>
                            <div className="contact-info-item padd-15">
                                <div className="icon">
                                    <i className="fa"><MdOutlineMailOutline /></i>
                                </div>
                                <h4>Email</h4>
                                <a target='blanck' onClick={handleEmailClick}><p>mmufato@gmail.com</p></a>
                            </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa"><CiLinkedin /></i>
                            </div>
                            <h4>Linkedin</h4>
                            <a href='https://linkedin.com/in/matheus-pestiglio-mufato-815b4a215' target='blank'><p>Matheus P. Mufato</p></a>
                        </div>
                        
                    </div>
                </div>
            </section>
    )
}

export default Teste