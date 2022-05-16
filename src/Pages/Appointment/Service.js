import React from 'react';

const Service = ({service, setTetment}) => {
    const {name, slots} = service
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class=" text-2xl text-center text-secondary">{name}</h2>
    <p className='text-center'>{slots.length } {slots. length > 1 ? "spaces" : "space"} <span> Available</span></p>
    <p className='text-center'>{
        
        slots.length>0 ? <span>{slots[0]}</span> : <span>Booking late</span>
        }</p>
    <div class="card-actions justify-center">
      

      <label onClick={()=> setTetment(service)}  disabled={slots.length === 0 } for="book-modal" class="btn btn-secondary text-center text-white uppercase text-xl">open modal</label>

    </div>
  </div>
</div>
        </div>
    );
};

export default Service;