import React, { Component } from "react";
import Card from "../Cards/Card";
import "./Functionality.css";
import functionalityData from "../data/functionalities.json";

export class FunctionalitySection extends Component {
  render() {
    return (
      <div className="functionality-container" id="functionality">
        <h5>How We Function</h5>
        <div className="functionality-card--container">
          <div className="functionality-card--row">
            <Card
              style={{ width: "450px", height: "450px" }}
              title={functionalityData.functionalities[0].title}
              body={functionalityData.functionalities[0].body}
              imageUrl={functionalityData.functionalities[0].imageUrl}
            />
            <Card
              style={{ width: "450px", height: "450px" }}
              title={functionalityData.functionalities[1].title}
              body={functionalityData.functionalities[1].body}
              imageUrl={functionalityData.functionalities[1].imageUrl}
            />
            <Card
              style={{ width: "450px", height: "450px" }}
              title={functionalityData.functionalities[2].title}
              body={functionalityData.functionalities[2].body}
              imageUrl={functionalityData.functionalities[2].imageUrl}
            />
          </div>
          <div className="functionality-card--row">
            <Card
              style={{ width: "725px", height: "420px", fontSize: 10 }}
              title={functionalityData.functionalities[3].title}
              body={functionalityData.functionalities[3].body}
              imageUrl={functionalityData.functionalities[3].imageUrl}
            />
            <Card
              style={{ width: "725px", height: "420px" }}
              title={functionalityData.functionalities[4].title}
              body={functionalityData.functionalities[4].body}
              imageUrl={functionalityData.functionalities[4].imageUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FunctionalitySection;
