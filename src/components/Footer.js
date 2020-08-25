import React from "react";
import {Col, Container, Row} from "reactstrap";

export default function FooterSection() {
  return <div className="sub-sections bg-dark text-white" style={{
    lineHeight: "2"
  }}>
    <Container className="text-left">
      <Row>
        <Col>
          <Row><strong>Increase your Traffic</strong></Row>
          <Row>Ad Software</Row>
          <Row>Blog Software</Row>
          <Row>SEO Software</Row>
          <Row>Social Media Software</Row>
          <Row>Content Management System</Row>
        </Col>
        <Col>
          <Row><strong>Connect With Leads</strong></Row>
          <Row>Find New Prospects</Row>
          <Row>Email Tracking</Row>
          <Row>Sales Email Template</Row>
          <Row>Click to Call Your Leads</Row>
          <Row>Email Marketing</Row>
        </Col>
        <Col>
          <Row><strong style={{
            lineHeight: 1.5
          }}>Close and Manage Leads</strong></Row>
          <Row>Document Tracking Tool</Row>
          <Row>Meeting Schedule Tool</Row>
          <Row>Sales Automation Tool</Row>
          <Row>Lead Management Tool</Row>
          <Row>Pipeline Management Tool</Row>
        </Col>
        <Col>
          <Row><strong>Support and Tools</strong></Row>
          <Row>DumbSpot Partners</Row>
          <Row>Join a Local User Group</Row>
          <Row>PieSync Integrations</Row>
          <Row>DumbSpot Templates</Row>
          <Row>Free Tools & Generators</Row>
        </Col>
      </Row>
      <br/>
      <hr color="white"/>
      <div className="text-center" style={{
        fontFamily: "Pacifico, san-serif",
        fontSize: "20px"
      }}>DumbSpot</div>
      <div className="text-center">
        Copyright &copy; {new Date().getFullYear()} Nikhil Nayak
        <div className="font-weight-bolder">
          Legal Stuff &nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy
        </div>
      </div>
    </Container>
  </div>
}