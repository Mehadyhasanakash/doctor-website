import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalSection = () => {
    return (
        <div>
            <div class="hero min-h-screen my-20">
  <div class="hero-content flex-col lg:flex-row">


    <img width= '450px' src={treatment} />


    <div className='p-12'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class=" btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DentalSection;