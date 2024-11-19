import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  const footerIconsStyle = {
    display: "flex",
    gap: "1rem",
    color: "white",
    fontSize: "1rem", // Added font size here
    textDecoration: "none",
  };

  const iconStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem", // Added font size here
  };

  const iconHoverStyle = {
    color: "#ddd", // Slightly different color on hover
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            <a
              href="http://www.linkedin.com/in/anandhakrishnan-m-nair"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              className="highlight-link"
            >
              Anandhakrishnan M Nair
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <div style={footerIconsStyle}>
            <a
              href="https://wa.me/7902856710"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              WhatsApp
            </a>
            |
            <a
              href="https://x.com/anandhakr_ishna?t=jj2ytegS35jgNmFp2UhnNQ&s=09"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Twitter
            </a>
            |
            <a
              href="http://www.linkedin.com/in/anandhakrishnan-m-nair"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              LinkedIn
            </a>
            |
            <a
              href="https://www.instagram.com/anandhakrishnan_m_/profilecard/?igsh=MWIxNXp5anJ6eDZ1"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
              onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              Instagram
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
