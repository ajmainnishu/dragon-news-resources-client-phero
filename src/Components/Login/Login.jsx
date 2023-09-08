import { Card } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-light pb-5">
            <Navigation></Navigation>
            <Card className="p-5 w-50 mx-auto mt-5 mb-5">
                <h2 className="text-center mb-4">Login your account</h2>
                <hr />
                <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold">Email address</Form.Label>
                        <Form.Control className="bg-light py-2" type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control className="bg-light py-2" type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="secondary w-100 py-2 mt-2" type="submit">
                        Login
                    </Button>
                </Form>
                <p className="text-center pt-4">Don't Have An Account ? <Link className="text-decoration-none" style={{color: "#FF8C47"}}>Register</Link></p>
            </Card>
        </div>
    );
};

export default Login;