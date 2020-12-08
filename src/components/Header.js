import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    return (
        <div className="navbar__cont">
            <span>MG</span>
            <ul className="nav__list__cont">
                <li className="nav__item">
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={700}
                    >
                        PORTFOLIO
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >
                        ABOUT
                    </Link>
                </li>

                <li className="nav__item">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;