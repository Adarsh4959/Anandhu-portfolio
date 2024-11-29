import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSap,
  SiFigma,
  SiCanva,
  SiMicrosoftexcel,
  SiMicrosoftoffice,
  SiTableau,
  SiSalesforce,
  SiPowerbi,
  SiOracle,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
        <p style={{ fontSize: '12px' }}>Microsoft Office</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <p style={{ fontSize: '12px' }}>Power Bi</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <p style={{ fontSize: '12px' }}>Oracle Database</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{ fontSize: '12px' }}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <p style={{ fontSize: '12px' }}>Canva</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <p style={{ fontSize: '12px' }}>Microsoft Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <p style={{ fontSize: '12px' }}>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSalesforce />
        <p style={{ fontSize: '12px' }}>Sales Force</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
