import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HalfYearly } from "./HalfYearly";
import { Monthly } from "./Monthly";
import layer from "../assets/layer2.jpg";
const GetStart = () => {
  const [monthly, setMonthly] = useState(true);
  const [halfYearly, setHalfYearly] = useState(false);

  const showYearrly = () => {
    setHalfYearly(true);
    document.getElementById("yearly").classList.add("btnMonth");
    document.getElementById("yearly").classList.remove("showBttn");
    document.getElementById("monthly").classList.add("showBttn");
    setMonthly(false);
  };
  const showMonthly = () => {
    setMonthly(true);
    document.getElementById("yearly").classList.add("showBttn");
    document.getElementById("monthly").classList.add("btnMonth");
    document.getElementById("monthly").classList.remove("showBttn");

    setHalfYearly(false);
  };
  return (
    <>
      <section>
        <div className="container mt-5 text-center">
          <Link to="/thankyou">
            <button className="btnGet">Get Started</button>
          </Link>
        </div>
        <div className="terms text-center">
          <span className="termsSpan">*Terms & Conditions Apply</span>
        </div>
        <div className="ingg text-center">
          <img src={layer} alt="" width="379px" />
        </div>
        <div className="planning mt-5 text-center">
          <h4>
            <b>Our Plans & Pricing</b>
          </h4>
        </div>
        <div className="btns mt-5 text-center">
          <button
            className="btnMonth"
            id="monthly"
            onClick={() => showMonthly()}
          >
            Monthly
          </button>
          <button
            className="showBttn"
            id="yearly"
            onClick={() => showYearrly()}
          >
            Half-Yearly
          </button>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h5>Jarvis Portfolio</h5>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Risk Profiling</span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Personalize portfolio</span>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">Real time risk </div>
                      <div className="cardSpan pl-2">management sysyem</div>
                    </div>
                  </div>

                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Chart Support</span>
                  </div>

                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">
                      Max AUM limit is 10,00,000
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h5>Jarvis Portfolio Plus+</h5>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Risk Profiling</span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Personalize portfolio</span>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">Real time risk </div>
                      <div className="cardSpan pl-2">management sysyem</div>
                    </div>
                  </div>

                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Chart Support</span>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">
                        Dedicated Relationship
                      </div>
                      <div className="cardSpan pl-2">Manager</div>
                    </div>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">Free access to other </div>
                      <div className="cardSpan pl-2">products</div>
                    </div>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Customization</span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">
                      Max AUM limit is 50,00,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h5>Jarvis Portfolio Unlimited</h5>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Risk Profiling</span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Personalize portfolio</span>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">Real time risk </div>
                      <div className="cardSpan pl-2">management sysyem</div>
                    </div>
                  </div>

                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Chart Support</span>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">
                        Dedicated Relationship
                      </div>
                      <div className="cardSpan pl-2">Manager</div>
                    </div>
                  </div>
                  <div className="cardData d-flex pt-1">
                    <span>
                      <i
                        className="fa fa-check-circle cardSpan"
                        aria-hidden="true"
                      ></i>
                    </span>

                    <div style={{ display: "inline-grid" }}>
                      <div className="cardSpan pl-2">Free access to other </div>
                      <div className="cardSpan pl-2">products</div>
                    </div>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Customization</span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">Transaction Support</span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">
                      Access to Fund Mangaer
                    </span>
                  </div>
                  <div className="cardData">
                    <i
                      className="fa fa-check-circle cardSpan"
                      aria-hidden="true"
                    ></i>
                    <span className="cardSpan pl-2">No AUM Limit</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-1"></div> */}
          </div>
        </div>
      </section>

      {halfYearly ? <HalfYearly /> : <Monthly />}
    </>
  );
};

export default GetStart;
