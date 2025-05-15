import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/anandhu4.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  // Styles for avatar cropping and alignment
  const avatarContainerStyle = {
    width: "80%",
    height: "500px",
    overflow: "hidden",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const avatarImageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    transform: "translateY(-20px)",
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center"> {/* Ensures vertical alignment */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an MBA candidate at FDDI, specializing in Retail and Fashion
              Merchandising. With a strong foundation in business management,
              finance, and logistics, I’m passionate about using data-driven
              strategies to drive efficiency and growth. 🤷‍♂️
              <br />
              <br />I’ve interned at
              <i>
                <b className="purple">
                  {" "}
                  Bharat Petroleum (Financial Analyst), TE Connectivity (Project
                  Intern), Milma (Supply Chain Intern) & THE BEAR HOUSE (Category Management Intern).{" "}
                </b>
                <br />
                gaining hands-on experience in financial reporting, operational
                optimization, and supply chain management.
              </i>
              <br />
              <br />
              I have experience with tools like Excel, Power BI, Salesforce,
              MS Office, Figma and Canva focusing on financial analysis,
              strategic planning and CRM. I’m seeking opportunities to apply my
              skills and make a real impact. &nbsp;
            </p>
          </Col>

          {/* Avatar on the right */}
          <Col md={4}>
            <Tilt>
              <div style={avatarContainerStyle}>
                <img src={myImg} alt="avatar" style={avatarImageStyle} />
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/7902856710"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/anandhakr_ishna?t=jj2ytegS35jgNmFp2UhnNQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/anandhakrishnan-m-nair"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anandhakrishnan_m_/profilecard/?igsh=MWIxNXp5anJ6eDZ1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=nairanandhakrishnan@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
