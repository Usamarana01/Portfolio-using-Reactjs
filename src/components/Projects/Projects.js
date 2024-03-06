import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fruits from "../../Assets/images/fruits.jpg"
import imageclass from "../../Assets/images/imageclass.png"
import insurance from "../../Assets/images/insurance.png"
import falconx from "../../Assets/images/falconx.jpg"
import stackoverflow from "../../Assets/images/stackoverflow.PNG" 
 import handwritten from "../../Assets/images/handwritten.jpg"
import churn from "../../Assets/images/churn.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              title="Stack Overflow Developers Survey 2023 Data Analysis"
              description="This project analyzes the Stack Overflow Developers Survey 2023 dataset using Python's Pandas library. It provides insights into various aspects of developers worldwide and visualizes the findings graphically."
              ghLink="https://github.com/Usamarana01/Stack-Overflow-Developers-Survey-2023-Data-Analysis"
      
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={handwritten}
              title="Handwritten Digits Classification Using ANN"
              description="Handwritten digits classification is a classic machine learning problem that involves identifying and classifying handwritten digits (0-9) from images using  machine learning technologies like tensorflow and keras."
              ghLink="https://github.com/Usamarana01/Handwritten-digits-classification"
        
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={fruits}
              title="FruitRecog"
              description="FruitRecog is a machine learning-based system designed to recognize various types of fruits from images. Leveraging the K-Nearest Neighbors (KNN) algorithm, it offers a lightweight yet effective solution for fruit classification tasks."
              ghLink="https://github.com/Usamarana01/Fruits-recognition-System-"
                         
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={insurance}
              title="Insurance Prediction using CNN"
              description=" this project demonstrates the application of Convolutional Neural Networks (CNNs) for predicting insurance outcomes based on features such as age, affordability, and insurance purchase history"
              ghLink="https://github.com/Usamarana01/Insurance-prediction-using-CNN"
             
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={falconx}
              title="FalconX - A digital marketing company"
              description="FalconX is a business company website that specializes in delivering high-quality projects to its clients. Build with html css and boostrap having an eeye catchy UI design.It contains projects , skills and client sections"
              ghLink="https://github.com/Usamarana01/Bussiness-Company-Website-Using-html-css-and-bootstrap"
              
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={imageclass}
              title="Image classification using ANN"
              description="Through this project, we demonstrate the effectiveness of Artificial Neural Networks in tackling image classification tasks. By leveraging TensorFlow and a carefully crafted model architecture, we achieve impressive accuracy in classifying images from the CIFAR-10 dataset. "
              
              ghLink="https://github.com/Usamarana01/Tiny-Image-classification-using-ANN"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={churn}
              title="Customers Churn prediction using ANN"
              description="This project utilizes Artificial Neural Networks (ANNs) to predict customer churn. By analyzing customer data, including demographics and service usage, the model aims to identify customers at risk of leaving a company."
              
              ghLink="https://github.com/Usamarana01/Customers-churn-prediction-"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          More Projects <strong className="purple">Coming soon! </strong>
        </h1>
      </Container>
    </Container>
  );
}

export default Projects;
