import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import c from '././../assets/images/c.png';

const Header = () => {
    const btnDay =()=>{
        document.body.style.backgroundColor= 'white';
        document.body.style.color= 'black';
    }
    const btnDark =()=>{
        document.body.style.backgroundColor= '#1a1728';
        document.body.style.color= 'white';      
    }

    return (
        <div className='navbar-to'>
            <Navbar collapseOnSelect className='mb-4'  expand="lg" bg="light" variant="light">
            <Container>
                <img src={c} className="imageC1" alt="" />
                <Navbar.Brand><Link className='blog-name' to='/'>BD Web Course</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='blog-container' to='/'>Home</Link>  
                        <Link className='blog-container'>Courses</Link>
                        <Link className='blog-container'>FAQ</Link>
                        <Link className='blog-container' to='/blog'>Blog</Link>  
                        <Link className='blog-container' to='/login'>Login</Link> 
                        <Link className='blog-container' to='/register'>Register</Link> 
                    </Nav>
                    <div className=" text-end">
                        <div className="btn-group border border-2 border-warning rounded-3" role="group" aria-label="Basic example">
                            <button onClick={btnDay} id="btn-normal" type="button" className="btn btn-light ">Day🔆</button>
                            <button onClick={btnDark} id="btn-dark" type="button" className="btn btn-dark">Dark🌙</button>
                        </div>
                        
                </div>
                    <Nav>
                        <>
                            {/* {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            } */}


                        </>
                        {/* <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link> */}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;