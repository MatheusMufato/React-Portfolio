import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../css/Home.css'

const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
            'Front-end developer',
            3000, 
            '',
            1000,
            'Freelancer',
            3000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '32px', display: 'inline-block' }}
            repeat={Infinity}
        />
        );
    };


const Home = () => {
    return (
        <section className="home section " id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hi Everyone, my name is <span className="name">Matheus P Mufato</span></h3>
                        <h3 className="my-profession">I'm a <span className="typing"> <Typing/></span></h3>
                        <p>I'm a front-end dev with experience for over a year. My expertise is to create and website design, graphic design, and many more...</p>
                        <a href="#Contact" className="btn">Dowload CV </a>
                    </div>
                        <div className="home-img padd-15">
                        
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Home