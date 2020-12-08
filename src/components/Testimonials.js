import React from 'react';

const Testimonials = () => {

    return (
        <div className="container__testimonials">
            <div className="card__img">
                <img src="me.jpg" alt="Me" className="img__st" />
            </div>
            <div className="brief">
                <span className="brief__title">Mohamed Goui</span>
                <div className="brief__style">
                    <i className="fa fa-star"></i>
                </div>
                <span className="brief__desc">Web Developer - Mobile Developer - Full-Stack JS Developer</span>
            </div>
        </div>
    );
}

export default Testimonials;