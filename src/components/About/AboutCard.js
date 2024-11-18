import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ANANDHAKRISHNAN M NAIR </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently pursuing a MBA with a specialization in Retail and Fashion Merchandising from FDDI Hyderabad.
            <br />
            I have completed BCom in Finance and Taxation from Chinmaya University
            Kochi.
            <br />
            <br />
            Apart from learning, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Lead with vision, strategize with purpose, and build solutions that drive meaningful impact."{" "}
          </p>
          <footer className="blockquote-footer">Anandhakrishnan M Nair</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
