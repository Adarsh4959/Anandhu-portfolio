import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/milmalogo_small.svg";
import chatify from "../../Assets/Projects/TECC.png";
import bitsOfCode from "../../Assets/Projects/BPCL.png";
import bearhouse from "../../Assets/Projects/bearhouse.png";

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
                  <li>Conducted quality checks, rectified errors, and ensured platform compliance.</li>
                  <li>Optimized product descriptions and visuals for better engagement.</li>
                  <li>Supported new outlet openings through inventory and merchandising coordination.</li>
                </ul>
              }
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MILMA ERCMPU Ltd"
              description={
                <ul>
                  <li>Conducted market research and analyzed customer feedback.</li>
                  <li>Identified product improvement opportunities and enhanced customer experience.</li>
                  <li>Led outbound sales efforts and converted leads into revenue growth.</li>
                  <li>Maintained customer satisfaction and ensured high product quality.</li>
                  <li>Managed customer acquisition and resolved client concerns.</li>
                  <li>Enhanced customer retention and supported marketing initiatives.</li>
                  <li>Optimized delivery processes to increase market presence.</li>
                </ul>
              }
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TE Connectivity Pvt Ltd"
              description={
                <ul>
                  <li>Collaborated with teams to implement new sales strategies.</li>
                  <li>Analyzed customer feedback and market data for optimization.</li>
                  <li>Used Salesforce and ERP/CRM tools to streamline operations.</li>
                  <li>Improved productivity and operational efficiency.</li>
                  <li>Prepared detailed reports to support decision-making.</li>
                </ul>
              }
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bharat Petroleum Corporation Ltd"
              description={
                <ul>
                  <li>Analyzed financial statements to assess financial health.</li>
                  <li>Focused on key metrics like liquidity ratios and cash flow sufficiency.</li>
                  <li>Performed financial analysis using ROI and profitability ratios.</li>
                  <li>Evaluated BPCL’s investment portfolio and capital allocation.</li>
                  <li>Benchmarked performance against industry peers.</li>
                  <li>Provided insights to enhance financial strategy and operations.</li>
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
