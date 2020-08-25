import React from 'react';
import LandingPage from "./components/Landing";
import ArrowDown from '@material-ui/icons/ArrowDropDown'
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import {Button, Container} from "reactstrap";

import ToolsPage from "./components/Tools";
import StatsPage from "./components/Stats";
import './App.css';
import SupportersPage from "./components/Supporters";
import LastReminderPage from "./components/LastReminder";
import FooterSection from "./components/Footer";

function App() {
  return (
      <div className="App">
        <div id="top-bar">
          <Container>
            <div style={{float: "left"}}>
              <div style={{padding: "15px 0", display: "inline-block"}}>
                <LanguageIcon/>
                &nbsp;English&nbsp;
                <ArrowDown/>
              </div>
              <span style={{fontSize: "34px", fontWeight: "100", margin: "0 15px", color: "#c3d1ec"}}>|</span>
              Contact Sales
            </div>

            <div style={{float: "right"}}>
              <SearchIcon/>
              &nbsp;&nbsp;&nbsp;
              <div style={{display: "inline-block", padding: "15px 0"}}>
                <Button color="primary">Sign In</Button>
                &nbsp;&nbsp;
                <Button outline color="primary">Get it free</Button>
              </div>
            </div>
          </Container>
        </div>
        <div style={{height: "83px"}}/>
        <div id="app-bar">
          <Container>
            <div className="app-title">
              DumbSpot
            </div>
            <div id="menu-bar">
              Software<ArrowDown/>&nbsp;
              Pricing&nbsp;&nbsp;
              Resources<ArrowDown/>&nbsp;
              Partners<ArrowDown/>&nbsp;
              About<ArrowDown/>&nbsp;
            </div>
          </Container>
        </div>
        <LandingPage/>
        <ToolsPage/>
        <StatsPage/>
        <SupportersPage/>
        <LastReminderPage/>
        <FooterSection/>
      </div>
  );
}

export default App;
