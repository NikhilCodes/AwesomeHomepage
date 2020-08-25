import React from "react";
import {Col, Container, Row} from "reactstrap";
import Gradient from "../images/gradient.png"

export default function LastReminderPage() {
  return <div className="sub-sections">
    <Container>
      <Row>
        <Col className="text-left">
          <h2 style={{
            fontSize: "30px",
            fontWeight: 800,
          }}>
            Start Growing With DumbSpot Today
          </h2>
          <p>
            With tools to make every part of your process more human and a support team excited to help you, getting
            started with inbound has never been easier.
          </p>
          <button className="get-product-button">Get DumbSpot free</button><br/><br/>
          <div style={{
            fontSize: "14px",
          }}>
            Get started with FREE tools, or get more with our premium software.
          </div>

        </Col>
        <Col><img width="100%" src={Gradient} alt="some-guy-jpg"/></Col>
      </Row>
    </Container>
  </div>
}