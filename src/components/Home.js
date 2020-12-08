import React from 'react';
import Header from './Header';
import Testimonials from './Testimonials';
import Resume from './Resume';
import About from './About';
import Contact from './ContactUs';
import Footer from './Footer';

const Home = () => {

    return (
        <div>
            <Header />
            <Testimonials />
            <Resume />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;