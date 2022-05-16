import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const ServiceModal = ({ tetment, date, setTetment }) => {
  const {name, slots} = tetment;
  const [user] = useAuthState(auth);
  const formtDate = format(date, "PP")




  const bookHendal = event =>{
    event.preventDefault()
    const slot = event.target.slot.value
    setTetment('')
    const booking = {

      treatmentId: tetment._id,
       treatment : tetment.name,
       date: formtDate,
      //  slot: tetment.slot,
      slot,
       patient: user.email,
       patientName: user.displayName,
       phone: event.target.phone.value  
    
     }
     fetch('http://localhost:5000/booking', {
  method: 'POST',
  body: JSON.stringify(booking),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(res => res.json())
  .then((data) =>{
    setTetment('')
  });
  }

  

  







  return (
    <div>
      <input type="checkbox" id="book-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="book-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-xl text-center">Service-Name: <span className='text-primary text-3xl'>{name}</span></h3>

          <form onSubmit={bookHendal} className='text-center grid grid-cols-1 gap-8 justify-items-center mt-12' >
            <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-success w-full text-center text-2xl" />

            <select name="slot" class="select select-accent w-full text-center text-2xl">
            {
             slots.map(slot => <option value={slot}>{slot}</option> )
            }
              
            </select>

            <input name="email" type="email" disabled value={user?.email} class="input input-bordered input-success w-full text-center text-2xl " />

            <input name="name" type="text" disabled  value={user?.displayName} class="input input-bordered input-success w-full text-center text-2xl " />

            <input name="phone" type="text" placeholder="Type here" class="input input-bordered input-success w-full text-center text-2xl" />


            <input type="submit" placeholder="Type here" class="btn btn-secondary w-50 mx-auto text-2xl text-white" />


          </form>

        </div>
      </div>
    </div>
  );
};

export default ServiceModal;