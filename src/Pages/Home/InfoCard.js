import React from 'react';

const InfoCard = ({ img, cardTitle, cardDescription, bgclassName }) => {
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${bgclassName}`}>
      <figure className='pl-5'><img src={img} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{cardTitle}</h2>
        <p className='text-white'>{cardDescription}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default InfoCard;