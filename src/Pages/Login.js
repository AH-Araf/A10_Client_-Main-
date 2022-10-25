import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub} from "react-icons/fa";
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div>
        <Form className='ms-lg-5 me-lg-5 ms-3 me-3'>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit" className='mb-5'>
                Login
            </Button> <br />

            <ButtonGroup vertical className='mb-5 d-flex justify-content-center ms-5 me-5'>
                <Button  className='mb-1' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-success"><FaGithub></FaGithub>  Login with Github</Button>
            </ButtonGroup>
        </Form>
        </div>
    );
};

export default Login;