import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../css/Home.css'
import Dev from '../images/Dev.png';

const Typing = () => {
    return (
        <TypeAnimation
            sequence={[
            'Front-end developer',
            3000, 
            '',
            2000,
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
                        <h3 className="hello">Hi Everyone, my name is <span className="name"> Matheus Mufato</span></h3>
                        <h3 className="my-profession">I'm a <span className="typing"> <Typing/></span></h3>
                        <p>I'm a front-end developer with just over a year of experience. I specialize in HTML, CSS, and JavaScript, 
                            and enjoy creating responsive, user-friendly web interfaces. I'm passionate about coding and continuously learning new technologies to improve my skills.</p>

                        <a href="#Contact" className="btn">Dowload CV</a>
                    </div>
                        <div className="home-img padd-15">
                            <img src={Dev} />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Home