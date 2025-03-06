import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import word from "../../Assets/Projects/word-counter.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bidcart from "../../Assets/Projects/unnamed.jpg";
import law from "../../Assets/Projects/law.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bidcart}
              isBlog={false}
              title="BidCard"
              description="BidCart, is a Flutter-based Android application designed to facilitate online bidding and purchasing. The app allows users to place bids on products, ensuring a competitive and engaging shopping experience. It integrates real-time updates and user-friendly interface"
              ghLink="https://github.com/Umair-Ishtiaq/Flutter/"
              demoLink="https://play.google.com/store/apps/details?id=com.bidcart"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={law}
              isBlog={false}
              title="Kanoon"
              description="A lawyer portfolio website built with React and RTK, featuring dynamic data tailored for each user."
              ghLink="https://github.com/Umair-Ishtiaq/Kanoon"
              demoLink="https://kanoon.fourelementx.com/umair/home"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Grocy"
              description="An online grocery shopping mobile app designed to simplify grocery purchases for users. It includes a main app for customers, a seller dashboard, a rider dashboard, and an admin panel to manage all activities efficiently."
              ghLink="https://github.com/Umair-Ishtiaq/grocery-main"
              demoLink="https://m.grocy.fourelementx.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word}
              isBlog={false}
              title="Word Counter"
              description="Word counter application built with HTML, CSS, and JavaScript. It allows users to input text and get the number of words, characters, and sentences in the text. It also provides other features such as a character counter, and many other editor features."
              ghLink="https://github.com/Umair-Ishtiaq/WordCounter"
              demoLink="https://umair-ishtiaq.github.io/WordCounter/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
