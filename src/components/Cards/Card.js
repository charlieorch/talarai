import React from "react";
import "./Card.css";

const Card = ({ title, imageUrl, body, style }) => {
  return (
    <div className="card-container" style={style}>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
