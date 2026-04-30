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
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few companies I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ✅ CENTRO CARD */}
          <Col md={5}>
            <ProjectCard
              imgPath={centro}
              isBlog={false}
              title="Reliance Centro"
              description="Worked as a Merchandising Executive managing product displays, inventory coordination, customer behavior analysis, and sales optimization in retail operations."
            />
          </Col>

          {/* BEAR HOUSE */}
          <Col md={5}>
            <ProjectCard
              imgPath={bearhouse}
              isBlog={false}
              title="THE BEAR HOUSE"
              description="Managed product catalogs across ecommerce platforms like Amazon, Flipkart, Nykaa, and Shopify. Ensured accurate listings, optimized content, and supported merchandising operations."
            />
          </Col>

          {/* MILMA */}
          <Col md={5}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MILMA ERCMPU Ltd"
              description="Conducted market research, improved customer experience, handled sales activities, and enhanced customer retention strategies."
            />
          </Col>

          {/* TE CONNECTIVITY */}
          <Col md={5}>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TE Connectivity Pvt Ltd"
              description="Worked with teams to implement sales strategies, used CRM tools, analyzed market data, and improved operational efficiency."
            />
          </Col>

          {/* BPCL */}
          <Col md={5}>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bharat Petroleum Corporation Ltd"
              description="Performed financial analysis, evaluated investment performance, and provided insights based on ROI, liquidity, and profitability metrics."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
