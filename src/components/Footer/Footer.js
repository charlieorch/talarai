import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">
          <p>
            <span>Copyright © 2021 talarai.com</span>
            <br />
            2101 S. IH35 Frontage Rd.
            <br />
            Austin, TX. 78741
          </p>
        </div>
        <div className="extra">
          <p className="bold">
            Talarai, LLC was founded to provide quality, cost-effective,
            services to Governmental clients.
          </p>
          <p className="bold">
            A Certified Service Disabled Veteran Owned Business.
          </p>
        </div>
      </div>
    );
  }
}
