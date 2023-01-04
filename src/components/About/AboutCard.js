import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        My name is{" "}
                        <span className="important">Eric Killian </span>
                        and I am from{" "}
                        <span className="important"> Columbus, Ohio</span>
                        <br />I graduated from <span className="important">Ohio State University </span>and am currently pursuing my Masters Degree at <span className="important">University of Southern California</span>
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do include
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Reading
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
