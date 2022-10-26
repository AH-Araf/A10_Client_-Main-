import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const SixCourseCart = ({courses}) => {
    const {id,name, image_url, details} = courses;
    
    return (
        <div ref={ref}>
            <div className='six-cart-container'>
                <p className='p-design d-flex justify-content-around'>
                    {name}
                    <Pdf targetRef={ref} filename="webCourse.pdf">
                        {({ toPdf }) => <button className='btn-pdf' onClick={toPdf}>Download PDF</button>}
                    </Pdf>
                </p>
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
            
            <div className='mb-5 mt-5 d-flex justify-content-center ms-5 me-5'>
                <Button  variant="outline-primary"><Link className='btn-a' to={`/courses/${id}`}>Premium Access to Read More</Link></Button>
            </div>
            
        </div>
    );
};

export default SixCourseCart;

