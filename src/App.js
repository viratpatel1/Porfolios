import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Navbar from "./Componends/Navbar";
import AboutPage from "./Componends/AboutPage";
import Typewriter from "typewriter-effect";
import ParticularBackground from "./Componends/ParticularBackground";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import SVG from "./SVG/programming_2svr.svg";
import Skill from "./Componends/Skill";
import Project from "./Componends/Project";
import Contact from "./Componends/Contact";
import Certificate from "./Componends/Certificate";
import ScrollToTop from "./Componends/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Banner />

        <AboutPage />

        <Skill />

        <Project />
        {/* <Certificate /> */}

        <Contact />
      </Router>
    </div>
  );
}

function Banner() {
  return (
    <div>
      {/* <ParticularBackground> */}
      <div className="banner">
        <Container>
          <Row className="row">
            <Col className="Detail">
              <h4 style={{ fontSize: "40px" }}>Hey !</h4>
              <h1>I'm Virat Patel</h1>
              <h4>I'm a Full Stack Developer</h4>
              <p>
                Also done <AiOutlineArrowDown />
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        '<span style="color: black;" >Engineering</span>',
                        '<span style="color: black;" >Programming</span>',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </p>
              <ul>
                <li>
                  <a href="https://github.com/viratpatel1" target="_blank">
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/virat-patel-9752441b1/"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hackerrank.com/viratpatel993"
                    target="_blank"
                  >
                    <FaHackerrank />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codechef.com/users/viratpatel"
                    target="_blank"
                  >
                    <SiCodechef style={{ margin: "0 0 0 0px" }} />
                  </a>
                </li>
                {/* <li><p>Github</p><a href="https://github.com/viratpatel1" target="_blank" ><AiFillGithub /></a></li>
                <li><p>Linkedin</p><a href="https://www.linkedin.com/in/virat-patel-9752441b1/" target="_blank" ><AiFillLinkedin /></a></li>
                <li><p>HackerRank</p><a href="https://www.hackerrank.com/viratpatel993" target="_blank"><FaHackerrank /></a></li>
                <li><p>CodeChef</p><a href="https://www.codechef.com/users/viratpatel" target="_blank"><SiCodechef style={{ margin: "0 0 0 -20px" }} /></a></li> */}
              </ul>
              <br />
              <Button
                className="resbtn"
                style={{
                  backgroundColor: "rgb(14, 14, 170)",
                  margin: "10px 0 0 0",
                  padding: "5px 10px",
                }}
                href="https://drive.google.com/file/d/1HZsvKdspk7Aq75ZsnUoh2k-xC7P7VC3o/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </Button>
            </Col>
            <Col className="Img">
              <img src={SVG} className="Svg-img" alt="Image"></img>
            </Col>
          </Row>
        </Container>
      </div>
      {/* </ParticularBackground > */}
    </div>
  );
}

export default App;
