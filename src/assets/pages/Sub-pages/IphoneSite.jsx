import React from "react";
import IphoneSite from "./Sub-pages/IphoneSite";

const IphoneSite = () => {
    return (
        <div className="row">
        <div className="personal-info padd-15">
            <div className="row">
            <div className="info-item padd-15">
                <p>
                Birthday : <span>30 Apr 2003</span>
                </p>
            </div>
            <div className="info-item padd-15">
                <p>
                Age : <span>20 years</span>
                </p>
            </div>
            <div className="info-item padd-15">
                <p>
                Phone : <span>+55 19 99616-8273</span>
                </p>
            </div>
            <div className="info-item padd-15">
                <p>
                Email : <span>mmufato@gmail.com</span>
                </p>
            </div>
            <div className="info-item padd-15">
                <p>
                Country : <span>Brazil</span>
                </p>
            </div>
            <div className="info-item padd-15">
                <p>
                Freelancer : <span className="freelancer">Available</span>
                </p>
            </div>
            </div>
            <div className="row">
            <div className="buttons padd-15">
                <a href="#contact" data-section-index="1" className="btn Hire-me">
                Hire-me
                </a>
            </div>
            </div>
        </div>
        <div className="skills padd-15">
            <div className="row">
            <div className="skill-item padd-15">
                <h5>HTML</h5>
                <div className="progress">
                <div className="progress-in" style="width: 89%;"></div>
                <div className="skill-percent">89%</div>
                </div>
            </div>
            <div className="skill-item padd-15">
                <h5>CSS</h5>
                <div className="progress green">
                <div className="progress-in" style="width: 86%;"></div>
                <div className="skill-percent">86%</div>
                </div>
            </div>
            <div className="skill-item padd-15">
                <h5>JS</h5>
                <div className="progress blue">
                <div className="progress-in" style="width: 27%;"></div>
                <div className="skill-percent">27%</div>
                </div>
            </div>
            <div className="skill-item padd-15">
                <h5>PHP</h5>
                <div className="progress purple">
                <div className="progress-in" style="width: 56%;"></div>
                <div className="skill-percent">56%</div>
                </div>
            </div>
            <div className="skill-item padd-15">
                <h5>C/C++</h5>
                <div className="progress red">
                <div className="progress-in" style="width: 68%;"></div>
                <div className="skill-percent">68%</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default IphoneSite;
