import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <p className="home-about-body">
              Passionate about web and mobile development.
              <br />
              <br />I have experience working with
              <i>
                <b className="purple"> C++, Python, React.js and Flutter. </b>
              </i>
              <br />
              <br />
              My interests lie in building dynamic
              <i>
                <b className="purple"> web applications, scalable front-end architectures, </b>
              </i>
              and exploring the latest advancements in
              <i>
                <b className="purple"> JavaScript framework. </b>
              </i>
              <br />
              <br />
              Currently, I am focused on improving my skills in
              <b className="purple"> MERN Stack development </b>
              and exploring solutions to build scalable products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;