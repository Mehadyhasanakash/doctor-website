import React from 'react';
import Banner from './Banner';
import DentalSection from './DentalSection';
import DoctorAppoinment from './DoctorAppoinment';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <DentalSection/>
            <DoctorAppoinment/>
        </div>
    );
};

export default Home;