import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
// import ContactSvg1 from '../SVG/contact-1.svg';
import ContactSvg2 from '../SVG/contact-2.svg';
import Insta from '../SVG/insta.svg';
import '../Css/Contact.css';


const Contact = () =>
{
    return (
        <div>
            <div className="Contact" >
                <Container>
                    <Row className="contact-row">
                        <Col className="svg-img" >
                            {/* <img src={ContactSvg1} /> */}
                            <img src={ContactSvg2} />
                        </Col>
                        <Col className="get" >
                            <h1>Get in Touch</h1>
                            <p style={{ margin: "5% 0 0 0" }} >Feel free to drop a mail to know about any query or questions you have. I'll try my best to get back to you in short time </p>
                            <ul>
                                <li><a href="https://github.com/viratpatel1" target="_blank" ><p>Github</p><AiFillGithub /></a></li>
                                <li><a href="https://www.linkedin.com/in/virat-patel-9752441b1/" target="_blank" ><p>Linkedin</p><AiFillLinkedin style={{ color: "rgb(47, 93, 245)" }} /></a></li>
                                <li><a href="mailto:viratpatel993@gmail.com" target="_blank" ><p>Email</p><img src="image/gmail.png" /></a></li>
                                {/* <li><a href="https://www.instagram.com/viratpatel1998/" target="_blank" ><p>Instagram</p><img src={Insta} /></a></li> */}
                            </ul>


                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Contact
