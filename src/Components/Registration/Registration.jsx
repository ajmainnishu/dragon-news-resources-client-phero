import { Card } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="bg-light pb-5">
            <Navigation></Navigation>
            <Card className="p-5 w-50 mx-auto mt-5 mb-5">
                <h2 className="text-center mb-4 text-muted">Register your account</h2>
                <hr />
                <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Your Name</Form.Label>
                        <Form.Control className="bg-light py-2" type="text" name="name" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Photo URL</Form.Label>
                        <Form.Control className="bg-light py-2" type="file" name="photo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Email address</Form.Label>
                        <Form.Control className="bg-light py-2" type="email" name="email" placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-semibold text-muted">Password</Form.Label>
                        <Form.Control className="bg-light py-2" type="password" name="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" className="text-muted" />
                    </Form.Group>
                    <Button variant="secondary w-100 py-2 mt-2" type="submit">
                        Register
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Registration;