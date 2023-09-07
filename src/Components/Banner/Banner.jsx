import logo from '../../assets/images/logo/logo.png'
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <div className='text-center mt-5 mb-4'>
                <Image src={logo} />
            </div>
            <p className='text-center text-muted'>Journalism Without Fear or Favour</p>
            <div className='d-flex justify-content-center fs-5 text-muted'>
                <p className='fw-semibold pe-1'>{moment().format("dddd,")}</p>
                <p>{moment().format("MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 mt-3'>
                <button className='btn btn-danger rounded-0 px-3'>Latest</button>
                <Marquee speed={100} className='fw-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Banner;