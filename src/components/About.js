import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className="about__container" id="about">
            <h2 className="about__title">ABOUT</h2>
            <div className="star__style">
                <i className="fa fa-star" style={{ color: "white" }}></i>
                <div className="about__paragraph">
                    <p>I am IT technician and Full-stack JavaScript developer who is proficient in both back-end and
                    front-end frameworks.</p>
                    <p>Fast-learner and my passion lies in learning about the latest
                    technologies.
                    </p>
                </div>
                <Link to="/files/cv.pdf" target="_blank" download><button className="download__btn"><i className="fa fa-download"></i> Download CV!</button></Link>
            </div>
        </div>
    );
}

export default About;