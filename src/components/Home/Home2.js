import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/images/icons/aboutme.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME{" "}
                            <span className="important"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            My name is Eric Killian
                            <br />
                            <br />
                            My field of Interest's include &nbsp;
                            <i>
                                <b className="important">Machine Learning </b>{" "}
                                and also in areas related to{" "}
                                <b className="important">
                                    Intelligent Robotics
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products with{" "}
                            <b className="important">Web Development</b> and
                            <i>
                                <b className="important">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="important">
                                    {" "}
                                    React.js and Vue.js
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                                style={{height: "200px"}}
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>SOCIAL MEDIA</h1>
                        <p>
                            Feel free to{" "}
                            <span className="important">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/erickillian"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/erickillian39"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/eric-killian/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/erickillian39"
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
            </Container>
        </Container>
    );
}
export default Home2;
