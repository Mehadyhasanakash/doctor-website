import React from 'react';
import appointment from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section >
            <section style={{ background: `url(${appointment})`, backgroundSize: 'cover'}}>
                <div className="hero min-h-screen ">
                    <div>
                        <h1 className='text-center text-primary text-xl'>Contac US</h1>
                        <h1 className='text-center text-white text-3xl'>Stay connected with us</h1>
                        <div className="hero-content flex-col lg:flex-row-reverse lg:max- w-lg w-100">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">

                                        <input type="text" placeholder="email" className="input input-bordered " />
                                    </div>
                                    <div className="form-control">

                                        <input type="text" placeholder="subject" className="input input-bordered mt-5" />

                                    </div>
                                    <div className="form-control">

                                        <input type="text" placeholder="your massage" className="input input-bordered mt-5 h-32" />

                                    </div>
                                    <button className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary mt-5'>GET STARTED</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;