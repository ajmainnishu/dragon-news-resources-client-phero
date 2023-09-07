import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const Contact = () => {
    return (
        <div>
            <div>
                <h5>Login With</h5>
                <Link><button className="btn btn-outline-primary w-100 mb-2 mt-2"><small><FaGoogle />&nbsp;Login with Google</small></button></Link>
                <Link><button className="btn btn-outline-secondary w-100"><small><FaGithub />&nbsp;Login with Github</small></button></Link>
            </div>
            <div>
                <h5 className="mb-3 mt-5">Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className="text-muted py-3"><FaFacebookF />&nbsp;Facebook</ListGroup.Item>
                    <ListGroup.Item className="text-muted py-3"><FaTwitter />&nbsp;Twitter</ListGroup.Item>
                    <ListGroup.Item className="text-muted py-3"><FaInstagram />&nbsp;Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Contact;