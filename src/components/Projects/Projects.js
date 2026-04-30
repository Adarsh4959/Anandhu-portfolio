import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/milmalogo_small.svg";
import chatify from "../../Assets/Projects/TECC.png";
import bitsOfCode from "../../Assets/Projects/BPCL.png";
import bearhouse from "../../Assets/Projects/bearhouse.png";
import centro from "../../Assets/Projects/centro.jpg";

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

          {/* RELIANCE CENTRO */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={centro}
              isBlog={false}
              title="Reliance Centro"
              description="Worked as a Merchandising Executive managing product displays, inventory coordination, customer behavior analysis, and sales optimization."
            />
          </Col>

          {/* THE BEAR HOUSE */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bearhouse}
              isBlog={false}
              title="THE BEAR HOUSE"
              description={
                <ul>
                  <li>Managed product catalogs across multiple ecommerce platforms.</li>
                  <li>Ensured accurate listings, pricing updates, and content optimization.</li>
                  <li>Oversaw listings on Amazon, Flipkart, Nykaa, and Shopify.</li>
                  <li>Conducted quality checks and ensured platform compliance.</li>
                  <li>Optimized product descriptions and visuals for better engagement.</li>
                  <li>Supported new outlet openings through inventory coordination.</li>
                </ul>
              }
            />
          </Col>

          {/* MILMA */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MILMA ERCMPU Ltd"
              description={
                <ul>
                  <li>Conducted market research and analyzed customer feedback.</li>
                  <li>Identified product improvement opportunities.</li>
                  <li>Led outbound sales efforts and improved revenue.</li>
                  <li>Maintained customer satisfaction and quality standards.</li>
                  <li>Handled customer acquisition and issue resolution.</li>
                </ul>
              }
            />
          </Col>

          {/* TE CONNECTIVITY */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TE Connectivity Pvt Ltd"
              description={
                <ul>
                  <li>Collaborated on new sales strategies.</li>
                  <li>Analyzed market data and customer feedback.</li>
                  <li>Used Salesforce and CRM tools.</li>
                  <li>Improved productivity and efficiency.</li>
                </ul>
              }
            />
          </Col>

          {/* BPCL */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bharat Petroleum Corporation Ltd"
              description={
                <ul>
                  <li>Analyzed financial statements and performance.</li>
                  <li>Worked on ROI and profitability metrics.</li>
                  <li>Evaluated investment portfolio.</li>
                  <li>Benchmarked industry performance.</li>
                </ul>
              }
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
