import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div style={{ backgroundColor: "#333", padding: "20px 0", color: "white", position: "fixed", bottom: 0, left: 0, width: "100%" }}>
      <Container fluid style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row>
          <Col md="4" style={{ textAlign: "center" }}>
            <h3> Developed by Muhammad Usama</h3>
          </Col>
          <Col md="4" style={{ textAlign: "center" }}>
            <h3>Copyright © {year} Mu.</h3>
          </Col>
          <Col md="4" style={{ textAlign: "center" }}>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center" }}>
              <li style={{ margin: "0 10px" }}>
                <a
                  href="https://github.com/Usamarana01"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a
                  href="https://x.com/UsamaRajput01?s=09"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a
                  href="https://www.linkedin.com/in/muhammad-usama-0307aa1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a
                  href="https://www.instagram.com/learnwithusama?igsh=aWs2NHNpMmFzNmtm"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
