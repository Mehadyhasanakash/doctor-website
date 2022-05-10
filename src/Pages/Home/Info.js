import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ' >
            <InfoCard  bgClass="bg-gradient-to-r from-primary to-secondary" cardTitle='Opening Hours' cardDescription='Lorem Ipsum is simply dummy text of the pri' img={clock} />
            <InfoCard  bgClass="bg-neutral" cardTitle='Visit our location' cardDescription='Brooklyn, NY 10036, United States' img={marker} />
            <InfoCard  bgClass="bg-gradient-to-r from-primary to-secondary" cardTitle='Contact us now'cardDescription='+000 123 456789' img={phone} />
        </div>
    );
};

export default Info;