import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import { DiNodejs, DiMongodb, DiDjango } from 'react-icons/di';
import { FaPython, FaBootstrap } from 'react-icons/fa';
import { SiMysql, SiCss3, SiHtml5, SiJava, SiExpress, SiJavascript } from 'react-icons/si'
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Python from '../SVG/python.svg';
import Mysql from '../SVG/mysql.svg';
import Java from '../SVG/java.svg';
import '../Css/Skill.css';

const Skill = () =>
{
    const React = 80;
    const MongoDB = 70;
    const Express = 70;
    const Node = 65;
    const MySQL = 60;
    const Python = 75;
    return (
        <div id="Skill">
            <div className="prograss-section" >
                <Container>
                    <h1 >Skill</h1>
                    <Row>
                        <Col>
                            <div className="bg">
                                <ul>
                                    <li>React</li>
                                    <li>80%</li>
                                </ul>
                                <ProgressBar className="bar" now={React} label={`${React}%`} />
                            </div>
                            <div className="bg">

                                <ul>
                                    <li>Express JS</li>
                                    <li>70%</li>
                                </ul>
                                <ProgressBar className="bar" now={Express} label={`${Express}%`} />
                            </div>
                            <div className="bg">

                                <ul>
                                    <li>MySQL</li>
                                    <li>60%</li>
                                </ul>
                                <ProgressBar className="bar" now={MySQL} label={`${MySQL}%`} />
                            </div>
                            <div className="bg">

                                <ul>
                                    <li>Python</li>
                                    <li>75%</li>
                                </ul>
                                <ProgressBar className="bar" now={Python} label={`${Python}%`} />
                            </div>
                        </Col>
                        <Col>
                            <div className="bg">

                                <ul>
                                    <li>MongoDB</li>
                                    <li>70%</li>
                                </ul>
                                <ProgressBar className="bar" now={MongoDB} label={`${MongoDB}%`} />
                            </div>
                            <div className="bg">

                                <ul>
                                    <li>Node JS</li>
                                    <li>65%</li>
                                </ul>
                                <ProgressBar className="bar" now={Node} label={`${Node}%`} />
                            </div>
                            <div className="bg">

                                <ul>
                                    <li>JavaScript</li>
                                    <li>70%</li>
                                </ul>
                                <ProgressBar className="bar" now={MongoDB} label={`${MongoDB}%`} />
                            </div>
                            <div className="bg">

                                <ul>
                                    <li>Java</li>
                                    <li>60%</li>
                                </ul>
                                <ProgressBar className="bar" now={MySQL} label={`${MySQL}%`} />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Skill

            // <div className="Skill">
            //     <Container>
            //         <Row className="skill-row">
            //             {/* <Col>1 of 2</Col> */}
            //             <Col className="col" sm={6} ><h2>Skill</h2></Col>
            //             <Col sm={6} >
            //                 <div className="skill-logo" >
            //                     <ul>
            //                         <li><p>MongoDB</p><DiMongodb style={{ color: "green" }} /></li>
            //                         <li><p>ExpressJS</p><SiExpress /></li>
            //                         <li><p>ReactJS</p><GrReactjs style={{ color: "aqua" }} /></li>
            //                         <li><p>NodeJS</p><DiNodejs style={{ color: "rgb(34, 85, 34)" }} /></li>
            //                     </ul>
            //                     <ul>
            //                         <li><p>BootStrap</p><FaBootstrap style={{ color: "rgb(138, 32, 236)" }} /></li>
            //                         <li><p>HTML</p><SiHtml5 style={{ color: "rgb(250, 148, 14)" }} /></li>
            //                         <li><p>CSS</p><SiCss3 style={{ color: "rgb(83, 83, 204)" }} /></li>
            //                         <li><p>Javascript</p><SiJavascript style={{ color: "rgb(226, 204, 8)" }} /></li>
            //                     </ul>
            //                     <ul>
            //                         <li><p>Python</p><img src={Python} style={{ width: "50px" }} /></li>
            //                         <li><p>Java</p><img src={Java} style={{ width: "50px" }} /></li>
            //                         <li><p>Django</p><DiDjango style={{ width: "70px", color: "white", backgroundColor: "rgb(9, 43, 9)" }} /></li>
            //                         <li><p>Mysql</p><img src={Mysql} style={{ width: "80px" }} /></li>
            //                     </ul>
            //                 </div>
            //             </Col>
            //         </Row>
            //     </Container>
            // </div>