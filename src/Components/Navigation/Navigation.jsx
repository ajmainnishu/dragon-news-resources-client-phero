import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
        <Container>
            <Navbar expand="lg" className='pt-4 pb-5'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Link to="" className='text-decoration-none text-muted'>Home</Link>
                        <Link to="" className='text-decoration-none text-muted'>About</Link>
                        <Link to="" className='text-decoration-none text-muted'>Career</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link><Button type="submit" className='btn btn-secondary fw-semibold px-4 rounded-0'>Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;