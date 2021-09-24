import React, { Component } from "react";
import ProfileCard from "../Cards/ProfileCard";
import aboutUsData from "../data/aboutUs.json";
import "./AboutUs.css";

export class AboutUsSection extends Component {
  render() {
    return (
      <div className="about-us--container" id="about-us">
        <h5>About Us</h5>
        <div className="opening-info">
          <span>Who We Are</span>
          <p>{aboutUsData.mainDescription}</p>
        </div>
        <div className="about-us--row">
          {aboutUsData.details.map((detail, index) => {
            return (
              <div className="info" key={index}>
                <span>{detail.title}</span>
                <p>{detail.body}</p>
              </div>
            );
          })}
        </div>
        <div className="team-container">
          <h3>Meet Some of the Team</h3>
          <br />
          <div className="team-row">
            {aboutUsData["team-members"].map((teamMember, index) => {
              return (
                <div key={index}>
                  <ProfileCard
                    name={teamMember.name}
                    title={teamMember.title}
                    imageUrl={teamMember.imageUrl}
                    body1={teamMember.description1}
                    body2={teamMember.description2}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsSection;
