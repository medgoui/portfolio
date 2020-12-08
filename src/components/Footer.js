import React from 'react';

const Footer = () => {

    return (
        <div className="footer__container">
            <div>
                <h3>LOCATION</h3>
                <p>24 Mesk City GABES 6012</p>
            </div>
            <div>
                <h3>AROUND THE WEB</h3>
                <div className="buttons__social">
                    <button className="button__social" onClick={() => window.open('https://www.facebook.com/mohamed.gouay', '_blank')}><i className="fa fa-facebook"></i></button>
                    <button className="button__social" onClick={() => window.open('https://www.linkedin.com/in/mohamed-goui-102208197/', '_blank')}><i className="fa fa-linkedin"></i></button>
                    <button className="button__social" onClick={() => window.open('https://github.com/medgoui', '_blank') }><i className="fa fa-github"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Footer;