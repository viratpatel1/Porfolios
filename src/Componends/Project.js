import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Project.css'

const Project = () =>
{
    return (
        <div className="main">
            <div id="con" className="container">
                <h1 className="pro" style={{ color: "" }} >Project</h1>
                <div id="Project" className="contain" >
                    < Card className="container-left" style={{ width: '18rem' }}>
                        <Card.Img className="img" variant="top" src="image/CRUD.jpg" alt="Img" />
                        <Card.Body  >
                            <Card.Title>CRUD App</Card.Title>
                            <Card.Text >
                                Web App where You can easily Create and Delete your Infomation.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <ul className="tech" >
                                <li>React</li>
                                <li> React Hooks</li>
                                <li>API</li>
                            </ul>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://users-cruds.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/CRUD"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="container-left" style={{ width: '18rem' }}>
                        <Card.Img className="img" variant="top" src="image/bookmyshow.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>Book my show</Card.Title>
                            <Card.Text>
                                MERN App where user can book there movie ticket.
                                Admin:-admin@gmail.com pass:-admin
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <ul className="tech" >
                                <li>React</li>
                                <li>Mongodb</li>
                                <li>Node js</li>
                            </ul>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://books-my-shows.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/Books-my-shows"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="container-left" style={{ width: '18rem' }}>
                        <Card.Img className="img" variant="top" src="image/Gmail.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>Gmail API</Card.Title>
                            <Card.Text>
                                It's A Demo of A Gmail Where you can Login with your valid email id to check yr email
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <ul className="tech" >
                                <li>HTML </li>
                                <li>JavasScript</li>
                            </ul>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://blissful-raman-c8ad93.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/1-Hackathon-Gmail-Clone-API"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="container-left" style={{ width: '18rem', color: "black" }}>
                        <Card.Img style={{ height: "43%" }} className="img" variant="top" src="image/kbc.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>KBC</Card.Title>
                            <Card.Text>
                                It's a KBC game you can play and view the increment of amount on your correct answer.
                                <br />
                                {/* <br /> */}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <ul className="tech" >
                                <li>React </li>
                                <li>React Hooks</li>
                            </ul>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://kbc-games.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/-KBC"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="container-left" style={{ width: '18rem' }}>
                        <Card.Img style={{ height: "43%" }} className="img" variant="top" src="image/API-1.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title> APIs</Card.Title>
                            <Card.Text>
                                Click to see Projects Based on APIs.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <ul className="tech" >
                                <li>React</li>
                                <li>API</li>
                            </ul>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://moviesdb-api.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://advice-quote.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href=" https://realtime-covid-19-cases.netlify.app/ "><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="container-left" style={{ width: '18rem' }}>
                        <Card.Img style={{ height: "43%" }} className="img" variant="top" src="image/Social-Media.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>MERN Project</Card.Title>
                            <Card.Text>
                                In this user can create there account the post there device photos on the site
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <ul className="tech" >
                                <li>React</li>
                                <li>MongoDB</li>
                                <li>Nodejs</li>
                            </ul>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://captone-project.herokuapp.com/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/capstone"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                </div>
            </div >
        </div >
    )
};


export default Project
