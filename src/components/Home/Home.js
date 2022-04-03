import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/images/me/profile_picture3.png";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
    return (
        <section>
            <div className="d-flex text-center intro-bit">
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={require('../../assets/videos/background6.mp4')} type="video/mp4" />
                </video>
                <Container className="home-section overlay-content" id="home">
                    <Container className="home-content d-flex align-items-center justify-content-center min">
                        <Row>
                            <Col className="home-header">
                                <h1 style={{ paddingBottom: 15 }} className="heading">
                                    Hi There!{" "}
                                    <span className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>
                                </h1>
                                <h1 className="heading-name">
                                    I'M
                                    <strong className="main-name"> ERIC KILLIAN</strong>
                                </h1>


                                <div style={{ textAlign: "left" }}>
                                    <Type />
                                </div>
                            </Col>

                            <Col>
                                <img
                                    src={homeLogo}
                                    alt="home pic"
                                    className="home-logo"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>
            <Home2 />
        </section>
    );
}

export default Home;
