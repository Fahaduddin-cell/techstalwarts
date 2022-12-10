import React from "react";
import GetStart from "./GetStart";

const Content = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-3">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">
              AI-based research using 12 million parameters
            </span>
          </div>
          <div className="col-md-3">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">Onboard with just 5 simple steps</span>
          </div>
          <div className="col-md-3">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">
              Personalized portfolio based your risk profile
            </span>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row mt-2">
          <div className="col-md-2"></div>
          <div className="col-md-3 pl-5">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">
              Ongoing personalize recommendations
            </span>
          </div>
          <div className="col-md-2 pl-5">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">3000+ stock universe</span>
          </div>
          <div className="col-md-3 pr-5">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">
              Trusted by over lac happy customers
            </span>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">
              24x7 risk management for risk returns
            </span>
          </div>
          <div className="col-md-3">
            <i className="fa fa-check-circle " aria-hidden="true"></i>
            <span className="paraSpan">
              Timely rebracking to optimize the returns
            </span>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
      <GetStart />
    </>
  );
};

export default Content;
