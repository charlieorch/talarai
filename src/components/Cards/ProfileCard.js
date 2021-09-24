import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, title, imageUrl, body1, body2 }) => {
  return (
    <div className="card">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="photo">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="column">
          <div className="content">
            <h3>{name}</h3>
            <br />
            <p>{body1}</p>
            <br />
            <p>{body2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
