import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyAppoinment = () => {
    const [appoinments, setAppoinments] = useState([])
    const [user] = useAuthState(auth);

    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppoinments(data))
       }
    } ,[user])


    return (
        <div>
            <h1>this is my appointment {appoinments.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">

      
    <thead>
      <tr>
        <th>Sl.</th>
        <th>name</th>
        <th>treatment</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody >

            {
              appoinments.map( (appoinment, index) =>  <tr>
                <td>{index +1}</td>
                <td>{appoinment.patientName}</td>
                <td>{appoinment.treatment}</td>
                <td>{appoinment.date}</td>
                
              </tr>)  
            }


     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;