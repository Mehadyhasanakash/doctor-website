import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const DoctorAppoinment = () => {
    return (
       <section className='hero min-h-screen'>
            <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
               <img className='mt-[-150px]'  src={doctor} alt="" /> 
            </div>
            <div className='flex-1 p-10'>
                <h1 className='text-xl text-primary'>Appointment</h1>
                <h1 className='text-3xl text-white font-bold'>Make an appointment Today</h1>
                <p className='text-white mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary mt-5'>GET STARTED</button>
            </div>
        </section>
       </section>
    );
};

export default DoctorAppoinment;