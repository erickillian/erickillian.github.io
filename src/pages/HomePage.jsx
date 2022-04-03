import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import VideoBanner from '../components/VideoBanner.jsx';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function HomePage() {
    return (
        <div className="bg-dark text-white">
            <VideoBanner />
            <div className="container">
                <header className="blog-header py-3">
                </header>
                <main className="container">
                    <div className="row g-5">
                        <div className="col-md-8">
                            <article className="blog-post">
                                <img src={require('../images/aboutme.png')} className="float-start icon-image" />
                                <h2 className="blog-post-title" id="about">About Me</h2>
                                <p className="blog-post-meta"><i>Updated February 19, 2022</i></p>
                                <p>Hello and welcome to my personal blog / website. I am lazy so there is still work for me
                                    to do updating
                                    this site with all of the projects I am currently working on, however feel free to look
                                    through any of
                                    my
                                    public code on
                                    GitHub. </p>
                                <hr />
                            </article>
                            <article className="blog-post">
                                <img src={require('../images/career.png')} className="float-start icon-image" />
                                <h2 className="blog-post-title" id="about">Experience</h2>
                                <p className="blog-post-meta"><i>Updated February 19, 2022</i></p>
                                <h5>Real Time Robotics</h5>
                                <ul>
                                    <li>Homogeneous transformations</li>
                                    <li>Direct kinematics</li>
                                    <li>Inverse kinematics</li>
                                    <li>Jacobians and Dynamics</li>
                                    <li>DC motor actuators</li>
                                    <li>Actuator simliation</li>
                                    <li>Control of actuators</li>
                                    <li>Drive electronics</li>
                                    <li>Position & velocity sensing</li>
                                    <li>Mobile robot kinematics and dynamics (wheeled and legged)</li>
                                    <li>Mobile robot navigation </li>
                                </ul>
                                <hr />

                            </article>
                        </div>

                        <div className="col-md-4">
                            <div className="position-sticky">
                                <div className="p-4">
                                    <h4 className="fst-italic">Other Links</h4>
                                    <ol className="list-unstyled">
                                        <li>
                                            <a className="bi-github" href="http://github.com/erickillian"> GitHub</a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div >
    );
}

export default HomePage;
