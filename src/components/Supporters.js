import React from "react";
import CerebrusLogo from "../SpecialLogos/cerebrus";
import {Col, Container, Row} from "reactstrap";
import EnigmaLogo from "../SpecialLogos/omni-tool";
import BlueNBlueLogo from "../SpecialLogos/bluenblue";

export default function SupportersPage() {
  return <div className="sub-sections">
    <Container>
      <Row>
        <Col xs="5">
          <h2 align="left" style={{
            fontWeight: 800,
            fontSize: "38px"
          }}>
            86,000
          </h2>
          <p align="left" style={{
            fontSize: "22px"
          }}>
            customers in over <strong>120</strong> countries<br/>
            growing their businesses with DumbSpot
          </p>
        </Col>
        <Col xs="3">
          <CerebrusLogo/>
          <BlueNBlueLogo/>
        </Col>
        <Col xs="3">
          <EnigmaLogo/>
        </Col>
      </Row>
    </Container>
  </div>
}