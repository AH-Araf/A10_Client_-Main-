import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCart = () => {
    const a = useLoaderData();
    console.log(a);
    const {name, image_url, details} =a;
    
    return (
        <div className='single-course-container'>
            <p className='write'>{name}</p>
            <img src={image_url} alt="" />
            <i><b><p>{details}</p></b></i>
        </div>
    );
};

export default SingleCart;