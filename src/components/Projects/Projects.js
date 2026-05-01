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
  console.log("🔥 Projects component loaded");
  console.log("📸 Centro image path:", centro);

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
          
          {/* 🔴 DEBUG BLOCK */}
          <Col md={12}>
            <div style={{ background: "red", color: "white", padding: "10px", marginBottom: "10px" }}>
              IF YOU SEE THIS → PROJECTS.JS IS WORKING
            </div>
          </Col>

          {/* 🟡 RELIANCE CENTRO */}
          <Col md={5}>
            {console.log("🟡 Rendering Centro Card")}

            <div style={{ border: "2px solid yellow", padding: "10px", marginBottom: "10px" }}>
              <ProjectCard
                imgPath={centro}
                isBlog={false}
                title="Reliance Centro"
                description="Worked as a Merchandising Executive managing product displays, inventory coordination, and sales optimization."
              />
            </div>
          </Col>

          {/* 🟢 BEAR HOUSE */}
          <Col md={5}>
            {console.log("🟢 Rendering Bearhouse")}

            <ProjectCard
              imgPath={bearhouse}
              isBlog={false}
              title="THE BEAR HOUSE"
              description="Managed product catalogs across ecommerce platforms."
            />
          </Col>

          {/* 🔵 MILMA */}
          <Col md={5}>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MILMA ERCMPU Ltd"
              description="Handled market research and customer experience improvements."
            />
          </Col>

          {/* 🟣 TE CONNECTIVITY */}
          <Col md={5}>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TE Connectivity Pvt Ltd"
              description="Worked with CRM tools and improved operations."
            />
          </Col>

          {/* ⚫ BPCL */}
          <Col md={5}>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bharat Petroleum Corporation Ltd"
              description="Performed financial analysis and evaluation."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
