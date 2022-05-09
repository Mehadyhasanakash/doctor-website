import React from 'react';

const InfoCard = ({clock}) => {
    return (
        <div class="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary">
  <figure className='p-5'><img src={clock}alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title text-white">New movie is released!</h2>
    <p className='text-white'>Click the button to watch on Jetflix app.</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
    );
};

export default InfoCard;