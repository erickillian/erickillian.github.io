import React, { Component } from 'react'
import './VideoBanner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'


export default class VideoBanner extends Component {
    render() {
        return (
            <div className="d-flex text-center intro-bit">
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={require('../assets/background4.mp4')} type="video/mp4" />
                </video>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column overlay-content">
                    <header className="mb-auto">
                        <h1></h1>
                    </header>
                    <main className="black_overlay px-3">
                        <div className="container d-flex">
                            <div className="row align-items-center">
                                <div className="col">
                                    <picture>
                                        <img src={require('../images/profile_picture3.png')} className="img-fluid" />
                                    </picture>
                                </div>
                                <div className="col biography_brief">
                                    <h1>Eric Killian</h1>
                                    <h3><small className="text-muted">Computer Engineer</small></h3>
                                    <hr />
                                    <p className="lead">
                                        <a href="./resume_erickillian.pdf"
                                            className="btn btn-lg fw-bold bg-white bi-file-earmark-person">
                                            Resume
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="mt-auto text-white-50">
                    </footer>
                </div>
            </div>
        )
    }
}
