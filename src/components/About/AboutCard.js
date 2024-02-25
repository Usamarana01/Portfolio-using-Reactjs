import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Usama </span>
            from <span className="purple"> Pakistan.</span>
            <br />
            I am currently employed as a software developer at <span className="purple"> Lean Automation pvt ltd.</span>
            <br />
            I am currently in the seventh semester pursuing a degree in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Videography
            </li>
            <li className="about-activity">
              <ImPointRight /> Content creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embracing creativity in pixels and code, one journey at a time."{" "}
          </p>
          <footer className="blockquote-footer">Usama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
