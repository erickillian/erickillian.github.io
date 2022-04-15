import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/images/me/profile_picture3.png";
import Home2 from "./Home2";
import Type from "./Type";


// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css'


function Home() {
    return (
        <section>
            <div className="d-flex text-center intro-bit">

                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={require('../../assets/videos/background14.mp4')} />
                </video>

                <div className="cover-container d-flex mx-auto flex-column overlay-content home-header">
                    <header className="mb-auto">
                        <h1></h1>
                    </header>
                    <main className="black_overlay px-3">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <picture>
                                        <img src={require('../../assets/images/me/profile_picture3.png')} className="home-image" />
                                    </picture>
                                </div>
                                <div className="col biography_brief">
                                    <h1>Eric Killian</h1>
                                    {/* <h3><small className="text-muted">Computer Engineer</small></h3> */}
                                    <hr />
                                    <Type />
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="mt-auto text-white-50">
                    </footer>
                </div>
            </div>
            <Home2 />
        </section>
    );
}

export default Home;
