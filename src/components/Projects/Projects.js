import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../assets/images/projects/leaf.png";
import emotion from "../../assets/images/projects/emotion.jpeg";
import editor from "../../assets/images/projects/codeEditor.png";
import chatify from "../../assets/images/projects/chatify.png";
import suicide from "../../assets/images/projects/suicide.png";
import bitsOfCode from "../../assets/images/projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="important">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={ }
              isBlog={false}
              title="Converge Pong"
              description="App that allows employees of Converge Technologies (local start up) to compare and record Ping Pong scores. Uses an ELO point scoring system"
              link="https://github.com/erickillian/converge-ping-pong"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
