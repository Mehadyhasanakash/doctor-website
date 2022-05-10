import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import DentalSection from './DentalSection';
import DoctorAppoinment from './DoctorAppoinment';
import Footer from './Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <DentalSection/>
            <DoctorAppoinment/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;