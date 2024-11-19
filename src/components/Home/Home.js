import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home3.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="d-flex align-items-center justify-content-center">
            {/* Text Section */}
            <Col lg={7} md={6} sm={12} className="home-header" style={{ textAlign: "left" }}>
              <h1 style={{ paddingBottom: 20 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANANDHAKRISHNAN</strong>
              </h1>

              <div style={{ marginTop: "20px", textAlign: "left", marginLeft: "10px" }}>
                <Typewriter
                  options={{
                    strings: ["MBA PROFESSIONAL"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </Col>

            {/* Image Section */}
            <Col lg={5} md={6} sm={12} style={{ paddingBottom: "20px", textAlign: "center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
