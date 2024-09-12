import React from 'react'
import '../../css/Sub-pages/Iphone.css'
import Full from '../../images/Full.png'
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
            <div className="InfoContainer TextInfo">
                <div className="MidSection">
                    <div className="Title">
                        <h1>Iphone 15 Pro</h1>
                    </div>
                    
                    <div className="Description info">
                        <p>
                        Este site, desenvolvido em React, foi criado para destacar a essência e sofisticação
                        do iPhone 15 Pro. Com um design visualmente atraente e uma navegação fluida, 
                        a experiência oferecida é moderna e intuitiva, refletindo a inovação que o iPhone 15 Pro traz.
                            <br />
                        O layout foi pensado para proporcionar uma experiência imersiva, 
                        com transições suaves e conteúdo interativo que envolve o usuário. Cada detalhe foi cuidadosamente planejado, 
                        garantindo que o site seja responsivo e otimizado para diferentes dispositivos e tamanhos de tela. 

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