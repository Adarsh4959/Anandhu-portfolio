import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Anandhu.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m an MBA candidate at FDDI, specializing in Retail and Fashion Merchandising. With a strong foundation in business management, finance, and logistics, I’m passionate about using data-driven strategies to drive efficiency and growth. 🤷‍♂️
              <br />
              <br />I’ve interned at
              <i>
                <b className="purple"> Bharat Petroleum (Financial Analyst), TE Connectivity (Project Intern), and Milma (Supply Chain Intern). </b>
              <br />gaining hands-on experience in financial reporting, operational optimization, and supply chain management.
              </i>
              <br />
              <br />
              I have experience with tools like Excel,Power BI, and Salesforce,MS Office,Oracle,Figma and Canva focusing on financial analysis, strategic planning and CRM. I’m seeking opportunities to apply my skills and make a real impact. &nbsp;
              <i>
                {/* <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain. */}
                {/* </b> */}
              </i>
              {/* <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
