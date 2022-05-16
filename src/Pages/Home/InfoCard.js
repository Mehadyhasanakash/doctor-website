import React from 'react';

const InfoCard = ({ img, cardTitle, cardDescription, bgclassName }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgclassName}`}>
      <figure className='pl-5 pt-5'><img src={img} alt="" /></figure>
      <div className="card-body text-center">
        <h2 className=" text-white">{cardTitle}</h2>
        <p className='text-white'>{cardDescription}</p>

      </div>
    </div>
  );
};

export default InfoCard;