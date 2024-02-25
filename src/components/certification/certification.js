import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCards from "./certificateCards";

import data from "../../Assets/images/data.jpg"
import bi from "../../Assets/images/bi.PNG"
import ai from "../../Assets/images/ai.PNG"
import bussinessIntell from "../../Assets/images/bussinessIntell.PNG"
import datascience from "../../Assets/images/datascience.PNG"
import gdsc from "../../Assets/images/gdsc.PNG"

function certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Here are my <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few Certifications from different organizations
          .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} className="project-card">
            <CertificateCards
              imgPath={data}
              isBlog={false}
              title="Google Data Analytics"
              description="Certified by Google, this credential validates proficiency in data analysis techniques, tools, and concepts, empowering effective decision-making and insights generation in today's data-driven world."
              
      
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <CertificateCards
              imgPath={bussinessIntell}
              isBlog={false}
              title="Foundations of Business Intelligence"
              description="Certified from Google, this certificate demonstrates mastery in essential business intelligence principles, equipping professionals with the skills to leverage data for strategic decision-making and organizational success."
              
        
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <CertificateCards
              imgPath={datascience}
              isBlog={false}
              title="What is Data Science"
              description=" Accredited by IBM, this certificate provides a comprehensive understanding of the fundamentals of data science, empowering learners to extract valuable insights from data and drive impactful decisions across industries."
              
                         
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <CertificateCards
              imgPath={gdsc}
              isBlog={false}
              title="GDSC Data Analytics Lead"
              description="Awarded by Google Developer Student Clubs, this certificate recognizes expertise in data analytics and  management, showcasing leadership and proficiency in leveraging data for strategic marketing initiatives." 
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <CertificateCards
              imgPath={bi}
              isBlog={false}
              title="Power BI Desktop "
              description="Earned through Coursera, this certification signifies proficiency in Power BI Desktop, equipping professionals with the skills to create impactful visualizations and unlock insights from data to drive informed decision-making."
             
              
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <CertificateCards
              imgPath={ai}
              isBlog={false}
              title="AI for Everyone"
              description="Accredited by Deep Learning AI, this certification validates a foundational understanding of artificial intelligence concepts, empowering individuals with the knowledge to navigate the AI landscape and harness its potential across diverse domains. "
            />
          </Col>
        </Row>
        <h1 className="project-heading">
           <p className="purple small"> "Certifications: Elevating skills, expanding possibilities." </p>
        </h1>
      </Container>
    </Container>
  );
}

export default certification;
