import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
            <div className="prograss-section">
                <Container>
                    <h1 >Skill</h1>
                    <Row>
                        <Col>
                            <div className="bg">
                                <ul>
                                    <li>React</li>
                                    {/* <li>80%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={React} label={`${React}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>Express JS</li>
                                    {/* <li>70%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={Express} label={`${Express}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>MySQL</li>
                                    {/* <li>60%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={MySQL} label={`${MySQL}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>Python</li>
                                    {/* <li>75%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={Python} label={`${Python}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>BootStrap</li>
                                    {/* <li>65%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={Node} label={`${Node}%`} />
                            </div>
                        </Col>
                        <Col>
                            <div className="bg">
                                <ul>
                                    <li>MongoDB</li>
                                    {/* <li>70%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={MongoDB} label={`${MongoDB}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>Node JS</li>
                                    {/* <li>65%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={Node} label={`${Node}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>JavaScript</li>
                                    {/* <li>70%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={MongoDB} label={`${MongoDB}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>Java</li>
                                    {/* <li>60%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={MySQL} label={`${MySQL}%`} />
                            </div>
                            <div className="bg">
                                <ul>
                                    <li>Github</li>
                                    {/* <li>65%</li> */}
                                </ul>
                                <ProgressBar className="bar" now={Node} label={`${Node}%`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Skill