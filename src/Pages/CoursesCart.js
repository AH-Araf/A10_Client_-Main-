import React, { useEffect, useState } from 'react';
import SixCourseCart from './SixCourseCart';

const CoursesCart = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course-api')
        .then( res => res.json())
        .then(data => setCourse(data));
    },[])
    return (
        <div>
            <div  className='display-flex'>
            {
                    course.map(courses => <SixCourseCart
                         key={courses.id}
                         courses={courses}
                    ></SixCourseCart> )
                }
            </div>
        </div>
    );
};

export default CoursesCart;