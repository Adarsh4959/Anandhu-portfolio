import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/milmalogo_small.svg";
import chatify from "../../Assets/Projects/TECC.png";
import bitsOfCode from "../../Assets/Projects/BPCL.png";
import bearhouse from "../../Assets/Projects/bearhouse.png";
import centro from "../../Assets/Projects/centro.png";

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

          {/* 🔴 FORCED TEST BLOCK */}
          <Col md={12}>
            <div style={{ background: "red", color: "white", padding: "10px", marginBottom: "10px" }}>
              IF YOU SEE THIS → PROJECTS.JS IS WORKING
            </div>
          </Col>

          {/* RELIANCE CENTRO */}
          <Col md={5}>
            <div style={{ border: "2px solid yellow", padding: "10px", marginBottom: "10px" }}>
              <ProjectCard
                imgPath={centro}
                isBlog={false}
                title="Reliance Centro"
                description="Worked as a Merchandising Executive managing product displays, inventory coordination, customer behavior analysis, and sales optimization."
              />
            </div>
          </Col>

          {/* THE BEAR HOUSE */}
          <Col md={5}>
            <ProjectCard
              imgPath={bearhouse}
              isBlog={false}
              title="THE BEAR HOUSE"
              description="Managed product catalogs across ecommerce platforms like Amazon, Flipkart, Nykaa, and Shopify."
            />
          </Col>

          {/* MILMA */}
          <Col md={5}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MILMA ERCMPU Ltd"
              description="Conducted market research, handled sales, and improved customer experience."
            />
          </Col>

          {/* TE CONNECTIVITY */}
          <Col md={5}>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TE Connectivity Pvt Ltd"
              description="Worked on CRM tools, sales strategies, and operational improvements."
            />
          </Col>

          {/* BPCL */}
          <Col md={5}>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bharat Petroleum Corporation Ltd"
              description="Performed financial analysis and evaluated investment performance."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
