import React from "react";
import {Container} from "reactstrap";
import AirShip from "../images/zeppelin.png";

export default function LandingPage() {

  let pos = -110;
  const animateAirShip = setInterval(() => {
    if(pos === 3000) {
      clearInterval(animateAirShip)
    }
    pos+=1
    document.getElementById("airship").style.left = `${pos}px`
  }, 100)

  return <div>
    <div className="hero-y-shifter"/>
    <div>
      <div className="landing-page">
        <div id="airship">
          <img height="110px" src={AirShip} alt="airship"/>
        </div>
        <Container className="landing-page-text">
          <h2>
            There's a better<br/>
            way to grow.
          </h2>
          <p>
            Marketing, sales, and service software that <br/>
            helps your business grow without compromise.<br/>
            Because “good for the business” should also<br/>
            mean “good for the customer.”
          </p>
          <button onClick={() => alert("Click")} className="get-product-button">Get DumbSpot Free!</button>
          <br/>
          <p style={{fontWeight: "700", fontSize: "12px", lineHeight: "20px"}}>
            Get started with FREE tools,<br/>
            and upgrade as you grow.
          </p>
        </Container>
      </div>
    </div>
  </div>
}
