import React from 'react';
import Banner from './Banner';
import DentalSection from './DentalSection';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <DentalSection/>
        </div>
    );
};

export default Home;