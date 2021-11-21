import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../Css/Navbar.css';

const Navbar = () =>
{
    return (
        <div>
            <div className="Navbar">
                <div className="Nav">
                    <div className="Logo">
                        <h3>VP</h3>
                    </div>
                    <div className="Nav-name">
                        <ul>
                            <li><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="banner" smooth={true} duration={300} >Home</Link></li>
                            <li><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="About" smooth={true} duration={300}>About</Link></li>
                            <li><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="Skill" smooth={true} duration={300}>Skill</Link></li>
                            <li><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="main" smooth={true} duration={300}>Project</Link></li>
                            <li><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="Contact" smooth={true} duration={300}>Contact</Link></li>
                            {/* <li><Link href="https://drive.google.com/file/d/1cY9ICkgPgOLnQ6NgYxx4N_3AcnFwYq4E/view" target="_blank" >Resume</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="React">
                <ReactBootStrap.Navbar sticky="top" expand={false}>
                    <ReactBootStrap.Container fluid>
                        <ReactBootStrap.Navbar.Brand>
                            VP
                        </ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <ReactBootStrap.Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <ReactBootStrap.Offcanvas.Header closeButton>
                                <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel">VP</ReactBootStrap.Offcanvas.Title>
                            </ReactBootStrap.Offcanvas.Header>
                            <ReactBootStrap.Offcanvas.Body>
                                <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
                                    <ReactBootStrap.Nav.Link><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="banner" smooth={true} duration={300}>Home</Link></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="About" smooth={true} duration={300}>About</Link></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="Skill" smooth={true} duration={300}>Skill</Link></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="main" smooth={true} duration={300}>Project</Link></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link><Link style={{ color: "rgb(14, 14, 170)" }} activeClass="active" spy={true} to="Contact" smooth={true} duration={300}>Contact</Link></ReactBootStrap.Nav.Link>
                                    <ReactBootStrap.Nav.Link href="https://drive.google.com/file/d/1cY9ICkgPgOLnQ6NgYxx4N_3AcnFwYq4E/view" target="_blank">Resume</ReactBootStrap.Nav.Link>
                                </ReactBootStrap.Nav>
                            </ReactBootStrap.Offcanvas.Body>
                        </ReactBootStrap.Navbar.Offcanvas>
                    </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </div>
        </div >
    )
}

export default Navbar


