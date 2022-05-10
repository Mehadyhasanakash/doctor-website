import React from 'react';

const Review = ({ review }) => {
    return (
        <>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{review.description}</h2>
                    <div className="flex items-center">
                        <div className="avatar ">
                            <div className="w-14 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 m-5 ">
                                <img src={review.img} alt='' />
                            </div>

                        </div>



                        <div className='p-5'>
                            <h1>{review.name}</h1>
                            <h1>{review.location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;