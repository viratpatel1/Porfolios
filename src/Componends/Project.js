import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import '../Css/Project.css'

const Project = () =>
{
    const [noOfElement, setNoOfElement] = useState(3);
    // const [empty, setEmpty] = useState('Load Mores');
    const slice = Data.projectData.slice(0, noOfElement);
    const MaxLength = 10;
    const Length = slice.length;
    console.log(Length)
    const LoadMore = () =>
    {
        setNoOfElement(noOfElement + noOfElement);

    }

    return (
        <div className="main">
            <div id="con" className="container">
                <h1 className="pro" style={{ color: "" }} >Project</h1>
                <div id="Project" className="contain" >

                    {slice.map((item, i) =>
                    {
                        return (
                            < Card key={i} className="container-left" style={{ width: '18rem' }}>
                                <Card.Img className="img" variant="top" src={item.src} alt="Img" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text >
                                        {item.text}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body style={{ margin: "-20px 0 0 0" }}>
                                    <ul className="tech" >
                                        {item.features.map((data, i) =>
                                            <li key={i}>{data[1]}</li>
                                        )}
                                    </ul>
                                </Card.Body>

                                <Card.Body style={{ margin: "-20px 0 0 0" }}>

                                    {item.ProjectUrl1 ? <Card.Link className='tagLink' target="_blank" href={item.ProjectUrl1}><FaExternalLinkAlt style={{ fontSize: "20px", background: 'transparent' }} /></Card.Link> : null}
                                    {item.GithubUrl1 ? <Card.Link className='tagLink' target="_blank" href={item.GithubUrl1}><AiFillGithub style={{ fontSize: "20px", background: 'transparent' }} /> </Card.Link> : null}
                                    {item.ProjectUrl2 ? <Card.Link className='tagLink' target="_blank" href={item.ProjectUrl2}><FaExternalLinkAlt style={{ fontSize: "20px", background: 'transparent' }} /></Card.Link> : null}
                                    {item.GithubUrl2 ? <Card.Link className='tagLink' target="_blank" href={item.GithubUrl2}><AiFillGithub style={{ fontSize: "20px", background: 'transparent' }} /> </Card.Link> : null}
                                    {item.ProjectUrl3 ? <Card.Link className='tagLink' target="_blank" href={item.ProjectUrl3}><FaExternalLinkAlt style={{ fontSize: "20px", background: 'transparent' }} /></Card.Link> : null}

                                </Card.Body>
                            </Card>
                        )
                    }
                    )}

                </div>
                {MaxLength !== Length ? (<button className="btn" onClick={() => LoadMore()} >Show More</button>) : null}

            </div >
        </div >
    )
};


export default Project








{/* <Card className="container-left" style={{ width: '18rem' }}>
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
                    </Card> */}
