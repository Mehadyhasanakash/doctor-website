import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Service from './Service';
import ServiceModal from './ServiceModal';

const AvailableAppointment = ({date}) => {
    const formtDate = format(date, "PP")
    // const [services, setServices] = useState([]);
    const [tetment, setTetment] = useState(null)
    
    const {data: services, isLoading, refetch} = useQuery(['booking', formtDate],()=>
    fetch(`http://localhost:5000/available?date=${formtDate}`)
        .then(res => res.json())   
    )
    if(isLoading){
        return <button class="btn loading"></button>
    }




    // useEffect(()=>{
    //     fetch(`http://localhost:5000/booking?date=${formtDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // } ,[formtDate])




    return (
       <div>
            <div>
            <h1 className='text-primary text-center text-xl'>Available Appointments on {format(date, 'PP')}</h1>

            
        </div>

        <div className='grid grid-cols-1 md:grid cols-2 lg:grid-cols-3 gap-4 mt-28'>
                {
                    services?.map(service => <Service
                    
                    key={service._id}

                    service={service}
                    setTetment={setTetment}
                    ></Service>)
                }
            </div>
            <div> 
                { tetment &&  <ServiceModal refetch={refetch} date={date} tetment={tetment} setTetment={setTetment}/>}
            </div>
       </div>
    );
};

export default AvailableAppointment;