import React from 'react';
import Banner from './Banner';
import DentalSection from './DentalSection';
import DoctorAppoinment from './DoctorAppoinment';
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
        </div>
    );
};

export default Home;