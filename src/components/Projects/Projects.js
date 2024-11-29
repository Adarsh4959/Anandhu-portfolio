import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/milmalogo_small.svg";
import chatify from "../../Assets/Projects/TECC.png";
import bitsOfCode from "../../Assets/Projects/BPCL.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={editor}
    isBlog={false}
    title="MILMA ERCMPU Ltd"
    description="Conducted market research and analyzed customer feedback to identify opportunities for product improvements and enhance customer experience. Evaluated customer engagement and market trends, driving strategic sales initiatives that expanded market reach and identified new sales opportunities. Led outbound sales efforts, converting leads into sales and contributing to revenue growth while maintaining high customer satisfaction and product quality. Managed customer acquisition and resolved client concerns, building long-term relationships and enhancing customer retention. Supported marketing and operational efficiency initiatives, optimizing delivery processes and increasing market presence."
    // ghLink="https://github.com/soumyajit4419/Editor.io"
    // demoLink="https://editor.soumya-jit.tech/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="TE Connectivity Pvt Ltd"
    description="Collaborated with cross-functional teams to address challenges in implementing new sales policies and strategies. Analyzed customer feedback and market data to identify potential solutions, optimizing customer engagement and retention. Used ERP and CRM tools like Salesforce to streamline operations and improve productivity. Supported management in preparing detailed reports and presentations to inform decision-making and enhance operational performance."
    // ghLink="https://github.com/soumyajit4419/Chatify"
    // demoLink="https://chatify-49.web.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title="Bharat Petroleum Corporation Ltd"
    description="Analyzed BPCL's financial statements (balance sheet, income statement, cash flow) to assess financial health, focusing on key metrics like liquidity ratios, debt-to-equity ratio, and cash flow sufficiency. Performed comprehensive financial analysis using ROI, profitability ratios, and other key performance indicators (KPIs) to evaluate business performance and inform strategic decisions. Evaluated BPCL’s investment portfolio and capital allocation to assess wealth management effectiveness and ensure alignment with organizational financial goals. Benchmarked BPCL’s financial performance against industry peers, identifying growth opportunities and providing actionable insights to enhance financial strategy and operations."
    // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
    // demoLink="https://blogs.soumya-jit.tech/"
  />
</Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
