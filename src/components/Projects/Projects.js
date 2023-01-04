import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import pong from "../../assets/images/projects/converge-pong.png";
import portfolio_website from "../../assets/images/projects/website.png";
import convergle from "../../assets/images/projects/wordle.png";
import aev from "../../assets/images/projects/AEV.png";
import capstone_image from "../../assets/images/projects/c3_image.png"


import capstone_documentation from "../../assets/docs/FINAL Design Report - Team 3.pdf"
import capstone_video from "../../assets/videos/c3_demo.mp4"

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
                            imgPath={convergle}
                            isBlog={false}
                            title="Convergle"
                            description="Fun competitive app that allows members of Converge Technologies (local start up) to play and compete at wordle"
                            link="https://github.com/erickillian/wordle-app"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pong}
                            isBlog={false}
                            title="Converge Pong"
                            description="App that allows employees of Converge Technologies (local start up) to compare and record Ping Pong scores. Uses an ELO point scoring system"
                            link="https://github.com/erickillian/converge-ping-pong"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={capstone_image}
                            isBlog={false}
                            title="Cleaver Cleaning Container (C^3)"
                            description="Advanced smart eletronic cleaning dispenser.  Senior capstone project at Ohio State University"
                            link={capstone_documentation}
                            video={capstone_video}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={aev}
                            isBlog={false}
                            title="AEV (Advanced Energy Vehicle)"
                            description="Advanced Energy Vehicle project for Fundamentals of Engineering at Ohio State. Team of 4.  
                            Created, designed and tested different parts to optimize speed for an advanced propeller based rail-rider.  
                            Wrote all the code for the teams vehicle"
                            link={aev}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
