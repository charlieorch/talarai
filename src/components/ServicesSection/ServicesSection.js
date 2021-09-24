import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./Services.css";
import serviceData from "../data/services.json";

class ServicesSection extends Component {
  render() {
    return (
      <div className="service-container" id="services">
        <h5 className="font-color">Our Services</h5>
        <div className="para-container">
          <p className="service-para">{serviceData.description}</p>
        </div>
        <h3 className="font-color">Take a look at our best options:</h3>
        <div className="service-card-container">
          <div className="service-card-row">
            <Carousel itemsToShow={3} enableSwipe={false} itemsToScroll={3}>
              {serviceData.services.map((service, index) => {
                return (
                  <div className="card-container" key={index}>
                    <div className="image-container">
                      <img src={service.imageUrl} alt="" />
                    </div>
                    <div className="card-content">
                      <div className="card-title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="card-body">
                        <p>{service.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;
