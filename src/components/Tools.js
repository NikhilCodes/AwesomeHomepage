import React from "react";
import {Col, Container, Row} from "reactstrap";

function Card({title, subtitle}) {
  return <div className="tool-card">
    <h3 align="left" style={{fontWeight: 700}}>
      {title}
    </h3>
    <p align="left" style={{fontWeight: 500}}>
      {subtitle}
    </p>
    <br/><br/><br/><br/>
    <button className="get-product-button" style={{
      width: "100%"
    }}>
      Get started
    </button>
  </div>
}

export default function ToolsPage() {
  return <div className="sub-sections" style={{
    backgroundColor: "#f8ffff",
  }}>
    <Container>
      <div className="flex-container">
        <div style={{
          width: "320px",
          height: "380px",
          display: "inline-block",
          margin: "10px",
        }}>
          <h3 align="left" style={{fontWeight: "700"}}>Powerful alone. Better Together.</h3>
          <br/>
          <p align="left">
            DumbSpot offers a full stack of software for marketing, sales, and customer service, with a completely free
            CRM at its core. They’re powerful alone — but even better when used together.
          </p>
        </div>
        <Card title="Free DumbSpot CRM"
              subtitle="Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever."/>
        <Card title="CMS Hub"
              subtitle="Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience."/>
        <Card title="Marketing Hub"
              subtitle="Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale."/>
        <Card title="Sales Hub"
              subtitle="Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster."/>
        <Card title="Service Hub"
              subtitle="Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business."/>
      </div>
    </Container>
  </div>
}