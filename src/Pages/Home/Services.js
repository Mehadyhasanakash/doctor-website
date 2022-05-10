import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [
        {
            _id:'1',
            name:"Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },
        {
            _id: '2',
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            _id: '3',
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening
        }
    ]
    return (
        <div>
           <div className='text-center my-24'>
           <h1 className='text-xl font-bold uppercase text-primary  '>OUR SERVICES</h1>
            <h1 className='text-4xl uppercase'>Services We Provide</h1>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
               {
               services.map(service => <Service
               key={service._id}
               service={service}
               />)
                }       
           </div>
        </div>
    );
};

export default Services;