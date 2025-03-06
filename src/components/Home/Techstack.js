import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlutter,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql style={{ color: "white" }} />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{ color: "white" }} />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ color: "white" }} />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis style={{ color: "white" }} />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: "white" }} />
      </Col> */}
    </Row>
  );
}

export default Techstack;

