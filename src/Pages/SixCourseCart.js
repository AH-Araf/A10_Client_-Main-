import React from 'react';
import { Link } from 'react-router-dom';

const SixCourseCart = ({courses}) => {
    const {id,name, image_url, details} = courses;
    
    return (
        <div>
            <div className='six-cart-container'>
                <p className='p-design'>{name}</p>
                <img src={image_url} alt="" />
                <p>
                {
                        details.length > 250 ?
                            <>{details.slice(0, 190) + '...'} <Link to={`/courses/${id}`}>Read More</Link> </>
                            :
                            details
                    }
                    </p>
            </div>
        </div>
    );
};

export default SixCourseCart;