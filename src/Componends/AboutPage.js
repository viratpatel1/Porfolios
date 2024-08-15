import React from "react";
import "../Css/AboutPage.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="About">
      <Container className="container">
        <Row className="About-Detail">
          {/* <Col sm={5} >
                        <img src="image/profile-pic.jpg" />
                    </Col> */}
          <h2>About</h2>
          <Col sm={12} className="coll-2">
            <p>
              Hello! I'm a passionate Full Stack Developer in MERN. I have
              <b style={{ color: "blue" }}> 3 years</b> of Work Experience on
              different technologies and tools mention in my resume. I like to
              work in a competitive environment to give my best output.
            </p>
            {/* <p>Hello! I'm Virat Patel, a passionate Full Stack Developer in MERN. I have graduated with Bachelors Degrees in ETRX Engineering(2016-2020) from <a href="https://slrtce.in/" target="_blank" ><span className="clg" >SLRTCE</span></a> in Mumbai University. </p> */}
            <p>
              I like to work with JavaScript, React and Python. My Core skill is
              MERN Stack Developer and I love to work around APIs. Along with
              this I have also work on IoT Project and had published our Project
              Paper and got the
              <a
                href="https://drive.google.com/file/d/1itee6Sw73QyJfwwnIgJOdrKScoeBxqM7/view"
                target="_blank"
              >
                <span className="clg"> Certificate</span>
              </a>
              .
            </p>
            <p>
              I am avaiable to work in a professional environment with
              like-minded people and work hard with my skills towards the
              vision, mission and goal of the company.
            </p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
