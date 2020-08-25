import React from "react";
import {Container} from "reactstrap";

function StatsSection({value, name}) {
  return <div className="stats-cell">
    <div style={{
      fontWeight: 800,
      fontSize: "32px",
    }}>{value}</div>
    <div style={{
      fontWeight: 500
    }}>{name}</div>
  </div>
}

export default function StatsPage() {
  return <div className="sub-sections" style={{
    background: "linear-gradient(45deg,#00a4bd,#00bda5)",
  }}>
    <Container style={{
      color: "white"
    }}>
      <h2 style={{fontWeight: 700}}>
        Learn and grow with award-winning support and a thriving community behind you.
      </h2><br/>
      <p>
        You don't have to go it alone. Master the inbound methodology and get the most out of your tools with DumbSpot's
        legendary customer support team and a community of thousands of marketing and sales pros just like you.
      </p><br/><br/><br/>

        <div>
          {/*<div style={{*/}
          {/*  border: "white solid 1px",*/}
          {/*  width: "0",*/}
          {/*  height: "65%",*/}
          {/*  position: "absolute",*/}
          {/*  left: "50%",*/}
          {/*}}/>*/}
          <div className="flex-container2">
            <StatsSection value="150+" name="DumbSpot user groups"/>
            <StatsSection value="7M+" name="monthly visits"/>
            <StatsSection value="276K+" name="certified professionals"/>
            <StatsSection value="26K" name="registered attendees"/>
            <StatsSection value="500+" name="integrations"/>
            <StatsSection value="6" name="languages"/>
            <StatsSection value="2.6M" name="social followers"/>
            <StatsSection value="86,000" name="customers"/>
          </div>
        </div>
    </Container>
  </div>
}