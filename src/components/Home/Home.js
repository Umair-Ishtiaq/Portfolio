import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "./Techstack";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Umair Ishtiaq</strong>
              </h1>

              <div style={{ paddingLeft: 48, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <h1 className="project-heading">
      Skill<strong className="purple">Set </strong>
        </h1>
        <Techstack />
                <Row>
                  <Col md={12} className="home-about-social">
                    <h1>FIND ME ON</h1>
                    <p>
                      Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                      <li className="social-icons">
                        <a
                          href="https://github.com/Umair-Ishtiaq"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                        >
                          <AiFillGithub />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a
                          href="https://www.linkedin.com/in/umair-ishtiaq"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                        >
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a
                          href="https://www.instagram.com/umair__raja_"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour home-social-icons"
                        >
                          <AiFillInstagram />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
        
    </section>
  );
}

export default Home;
