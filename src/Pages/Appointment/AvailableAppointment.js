import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import ServiceModal from './ServiceModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [tetment, setTetment] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
       <div>
            <div>
            <h1 className='text-primary text-center text-xl'>Available Appointments on {format(date, 'PP')}</h1>

            
        </div>

        <div className='grid grid-cols-1 md:grid cols-2 lg:grid-cols-3 gap-4 mt-28'>
                {
                    services.map(service => <Service
                    
                    key={service._id}

                    service={service}
                    setTetment={setTetment}
                    ></Service>)
                }
            </div>
            <div> 
                { tetment &&  <ServiceModal date={date} tetment={tetment} setTetment={setTetment}/>}
            </div>
       </div>
    );
};

export default AvailableAppointment;